/* eslint-disable no-console */
/* eslint-disable max-len */
const path = require('path')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { merge } = require('webpack-merge')

const babelConfig = require('../../../babel.config.js')
const { baseConfig } = require('../../../configs/webpack/webpack.base.babel.js')

const port = 8888
const analyzePort = port + 666

const smp = new SpeedMeasurePlugin()
const noHMR = process.env.HMR === 'off'
const noSMP = process.env.SMP === 'off'
const notFederated = process.env.MF === 'off'
const noLiveReload = process.env.LIVE_RELOAD === 'off'
const analyze = process.env.BUNLDE_ANALYZE

console.log('🔁 HMR IS:', process.env.HMR)
console.log('🚗 SMP IS:', process.env.SMP)
console.log('STATS IS:', process.env.STATS)

const smpConfig = (config) => (noSMP ? config : smp.wrap(config))

const target = 'some_target'

const proxyRoutes = [
    {
        location: '/app_path',
        proxy_pass: `http://some_real_path.com`,
        noModify: false,
    },
]

module.exports = smpConfig(
    merge(baseConfig, {
        stats: {
            warningsFilter: [/critical dependency:/i],
        },
        mode: 'development',
        devtool: 'eval-source-map',
        context: path.resolve(__dirname, '..'),
        entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
        output: {
            filename: '[id].js',
            path: path.resolve(__dirname, '..', '..', '..', 'dist'),
            publicPath: 'auto',
            chunkFilename: '[id].[hash].js',
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx|js|jsx)$/,
                    exclude: /node_modules/,
                    use: { loader: 'babel-loader', options: babelConfig },
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            !noHMR && new ReactRefreshWebpackPlugin({ overlay: false }),
            analyze &&
                new BundleAnalyzerPlugin({
                    analyzerPort: 'auto',
                    port: analyzePort,
                }),
            new HtmlWebpackPlugin({
                chunks: ['main'],
                minify: false,
                inject: false,
                filename: 'index.html',
                template: path.join(__dirname, './', 'assets', 'templates', 'index.html.ejs'),
            }),
            new webpack.WatchIgnorePlugin({ paths: [/\.js$/, /\.d\.ts$/] }),
            new ForkTsCheckerWebpackPlugin({
                eslint: {
                    enabled: true,
                    files: './src/**/*.{ts,tsx,js,jsx}',
                },
                issue: {
                    exclude: { severity: 'warning' },
                },
                typescript: {
                    diagnosticOptions: {
                        semantic: true,
                        syntactic: true,
                        profile: true,
                    },
                },
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development'),
                'process.env.IS_MF': !notFederated,
            }),
        ].filter((plugin) => plugin),
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss'],
            plugins: [
                new TsconfigPathsPlugin({
                    configFile: 'tsconfig.json', // от cwd
                }),
            ],
        },
        devServer: {
            https: false,
            static: [
                {
                    directory: path.join(__dirname, '../../../dist'),
                },
            ],
            devMiddleware: {
                publicPath: '/',
                writeToDisk: true,
            },
            port,
            hot: !noHMR,
            liveReload: !noLiveReload,
            open: '/',
            historyApiFallback: { disableDotRule: true },
            proxy: {
                '/app_path': {
                    headers: {
                        'Access-Control-Allow-Headers':
                            'Authorization,Accept,Origin,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range',
                        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,DELETE,PATCH',
                    },
                    changeOrigin: true,
                    target,
                    logLevel: 'debug',
                    pathRewrite(_path, req) {
                        const strippedUrl = req.url.replace('/app_path', '')
                        const matchedRouteObj = proxyRoutes.find((route) => strippedUrl.includes(route.location))
                        return strippedUrl.replace(matchedRouteObj.location, '')
                    },
                    router: (req) => {
                        const strippedUrl = req.url.replace('/app_path', '')
                        const matchedRouteObj = proxyRoutes.find((route) => strippedUrl.includes(route.location))
                        return matchedRouteObj.proxy_pass
                    },
                    onProxyReq: (proxyReq) => {
                        proxyReq.setHeader('Origin', target)
                    },
                },
            },
        },
    })
)
