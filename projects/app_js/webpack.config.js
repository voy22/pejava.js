let path = require('path');
let HtmlWebpackPlugin = require("html-webpack-plugin");
let {CleanWebpackPlugin} = require('clean-webpack-plugin');
//let UglifyJSPlugin = require("uglifyjs-webpack-plugin");
let TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, options) => {
    let isDev = options.mode === 'development';
    return {
        mode: options.mode || 'development',
        entry: [
            './projects/app_js/src/index.js',
        ],
        output: {
            path: path.resolve(__dirname, './dist/'),
            filename: 'index.js',
            publicPath: ""
        },
        resolve: {
            modules: ['node_module', 'node_modules']
        },
        devServer: {
            open: 'http://localhost:3301',
            port: 3301,
            contentBase: path.join(__dirname, '/dist'),
            watchContentBase: true,
        },
        optimization: {
            minimize: true,
            minimizer  : [
                new TerserPlugin({
                    terserOptions: {
                        ecma: 5,
                        parse: {},
                        compress: {},
                        //mangle: true, // Note `mangle.properties` is `false` by default.
                        module: false,
                        // Deprecated
                        output: null,
                        format: null,
                        toplevel: false,
                        nameCache: null,
                        ie8: false,
                        keep_classnames: true,
                        keep_fnames: false,
                        safari10: false,
                    },
                }),
            ]
        },

        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'projects/app_js/src/index.html',
                minified: { collapseWhitespace: !isDev}
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(ttf|woff|woff2|eot)$/,
                    loader: 'url-loader'
                    //loader: 'file-loader'
                },
                {
                    test: /\.__js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    "@babel/env",
                                    "@babel/preset-react"
                                ],
                                plugins: [
                                    "@babel/plugin-transform-modules-commonjs",
                                    "@babel/plugin-proposal-class-properties"
                                ]
                            }
                        },
                        //'eslint-loader'
                    ],
                    include: [ __dirname ],
                    exclude: [
                        path.resolve(__dirname, 'dist')
                    ]
                }
            ]
        },
    }
};


