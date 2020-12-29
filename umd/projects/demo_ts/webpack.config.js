/* https://www.youtube.com/watch?v=eSaF8NXeNsA */

let path = require('path');
//var glob = require("glob");

module.exports = (env, options) => {
    let isDev = options.mock === 'development';

    return {
        entry: './projects/demo_js/index.js',
        //entry: glob.sync('./src/**/*.ts'),
        output: {
            path: path.resolve(__dirname, './dist/'),
            filename: '[name].js',
            publicPath: "dist/"
        },
        resolve: {
            extensions: ['.js', '.json', 'jsx', '.ts', '.tsx', '.png']
            alias: {
                '@model': path.resolve(__dirname, './src/model')
                '@': path.resolve(__dirname, './src')
            }
            modules: ['node_module', 'node_modules']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    //loader: 'babel-loader',
                    loader: {
                        //loaders: isDev ? ['babel-loader', 'eslint-loader'] : ['babel-loader'],
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "@babel/env",
                                "@babel/preset-typescript",
                                "@babel/preset-react"
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
                        path.resolve(__dirname, 'lib'),
                    ]
                }
            ]
        }
    }
};


