/* eslint-disable no-console */
/* eslint-disable @babel/no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const dotenv = require('dotenv')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const webpack = require('webpack')

const { parsed } = dotenv.config()
const notFederated = process.env.MF === 'off'

parsed ? console.info('🏄‍ .env is present') : console.warn('🆘 CAUTION: No .env file present! Create .env in root!')

const dotenvParsed = parsed
    ? Object.keys(parsed).reduce((obj, key) => {
          const keyName = `process.env.${key}`
          const newItem = { [keyName]: JSON.stringify(parsed[key]) }
          return { ...obj, ...newItem }
      }, {})
    : {}

const gitRevisionPlugin = new GitRevisionPlugin({
    lightweightTags: true,
})

const optimization = !notFederated
    ? {}
    : {
          splitChunks: {
              chunks: 'all',
          },
      }

const baseConfig = {
    stats: 'normal',
    watchOptions: {
        ignored: ['dist', 'node_modules'],
    },
    optimization,
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]',
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]',
                },
            },
            {
                test: /\.(csv)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'resources/[hash][ext][query]',
                },
            },
            {
                test: /nls[/\\]index.js$/,
                use: [
                    {
                        loader: 'i18next-resource-store-loader',
                    },
                ],
            },
            {
                test: /\.ico$/,
                type: 'asset/resource',
                generator: {
                    filename: '[hash][ext]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            dry: false,
        }),
        gitRevisionPlugin,
        new webpack.DefinePlugin({
            ...dotenvParsed,
            'process.env.GIT_VERSION': JSON.stringify(gitRevisionPlugin.version()),
            'process.env.GIT_COMMITHASH': JSON.stringify(gitRevisionPlugin.commithash()),
            'process.env.GIT_BRANCH': JSON.stringify(gitRevisionPlugin.branch()),
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    performance: {
        hints: false,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss'],
        alias: {
            process: 'process/browser',
        },
        fallback: {
            crypto: false,
            path: false,
            fs: false,
            stream: false,
            os: false,
            worker_threads: false,
            tls: false,
            net: false,
            zlib: false,
            http: false,
            https: false,
            child_process: false,
            vm: false,
            constants: false,
            inspector: false,
        },
    },
}

module.exports.baseConfig = baseConfig
