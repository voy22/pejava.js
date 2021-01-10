let HtmlWebpackPlugin = require("html-webpack-plugin");
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let {CleanWebpackPlugin} = require('clean-webpack-plugin');
let {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

let path = require('path');

module.exports = (env, options) => {
    let isDev = options.mock === 'development';
    
    let plugins = [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'index.html',
            template: './src/index.html',
            minified: {
                collapseWhitespace: !isDev,
            }
        }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
    ];
    !isDev && plugins.push(new BundleAnalyzerPlugin());

    return {
        entry: ['./src/index.js'],
        output: {
            path: path.resolve(__dirname, './dist/'),
            filename: '[name].js',
            publicPath: ""
        },
        resolve: {
            extensions: ['.js', '.json', '.png'],
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    loader: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "@babel/env",
                            ],
                            plugins: [
                                "@babel/plugin-transform-modules-commonjs",
                                "@babel/plugin-proposal-class-properties"
                            ]
                        }
                    },
                    exclude: [
                        path.resolve(__dirname, 'node_modules'),
                        path.resolve(__dirname, 'dist'),
                    ]
                },
                {
                    test: /\.css/,
                    use: [
                        //'style-loader',
                        { loader: MiniCssExtractPlugin.loader },
                        'css-loader',
                    ]
                },
                {
                    test: /\.s[ac]ss/,
                    use: [
                        //'style-loader',
                        { loader: MiniCssExtractPlugin.loader },
                        'css-loader',
                        'sass-loader'
                    ]
                },
            ]
        },
        plugins: plugins
    }
};


