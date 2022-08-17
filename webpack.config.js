const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // entry point of the application
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: 'bundle.js' // output file name
    },
    mode: 'development', // development or production is de warning in screen
    resolve: {
        extensions: ['.js', '.jsx'], // extensions to resolve
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // test for .js or .jsx files
                exclude: /node_modules/, // exclude node_modules
                use: {
                    loader: 'babel-loader' // use babel-loader for .js or .jsx files
                }
            },
            {
                test: /\.html$/, // test for .html files
                use: [
                    {
                    loader: 'html-loader', // use html-loader for .html files
                    }
                ],
            }
        ]
    },
    plugins: [
        new htmlwebpackplugin({ // create a new htmlwebpackplugin
            template: './public/index.html', // template file
            filename: './index.html' // output file name
        }),
    ]
}
