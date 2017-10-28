var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        home:     './client/HomePage.js',
        about:    './client/AboutPage.js',
        projects: './client/ProjectsPage.js',
        hardware: './client/HardwareProjectsPage.js',
        software: './client/SoftwareProjectsPage.js',
        contact:  './client/ContactPage.js'
    },
    plugins: [
        // Cleans dist folder after every build.
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        // Creates bundled javascript files and stores them in specified directory.
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        // Allows javascript files to import files with specified extensions.
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    }
};
