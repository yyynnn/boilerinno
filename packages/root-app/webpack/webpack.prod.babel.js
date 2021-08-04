/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
/* eslint-disable max-len */
const path = require('path')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const babelConfig = require('../../../babel.config.js')
const { baseConfig } = require('../../../configs/webpack/webpack.base.babel.js')

const currentStage = process.env.STAGE

console.log('MODULE FEDERATION IS:', process.env.MF)

module.exports = merge(baseConfig, {
    stats: {
        warningsFilter: [/critical dependency:/i],
    },
    devtool: 'source-map',
    mode: 'production',
    context: path.resolve(__dirname, '..'),
    entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
    output: {
        filename: '[name]_[fullhash].js',
        chunkFilename: '[name]_[chunkhash].chunk.js',
        path: path.resolve(__dirname, '../../../dist'),
        publicPath: '/',
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
        new HtmlWebpackPlugin({
            chunks: ['main'],
            minify: false,
            inject: false,
            filename: 'index.html',
            template: path.join(__dirname, './', 'assets', 'templates', 'index.html.ejs'),
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                enabled: false,
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
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true,
                },
            },
        }),
        new MiniCssExtractPlugin({
            filename: '/css/[name].min.css',
            chunkFilename: '/css/[name].min.css',
            ignoreOrder: false,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.STAGE': JSON.stringify(currentStage),
        }),
    ].filter((plugin) => plugin),
    performance: {
        assetFilter: (assetFilename) => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: 'tsconfig.json', // от cwd
            }),
        ],
    },
})
