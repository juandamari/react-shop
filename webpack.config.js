const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', // entry point of the application
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: 'bundle.js', // output file name
        publicPath: '/'
    },
    mode: 'development', // development or production is de warning in screen
    resolve: {
        extensions: ['.js', '.jsx'], // extensions to resolve
        alias: {
            '@copoments': path.resolve(__dirname, 'src/components/'),
            '@logo': path.resolve(__dirname, 'src/assets/logos'),
            '@icons': path.resolve(__dirname, 'src/assets/icons'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
        }
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
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                  {
                    loader: "file-loader",
                    options: {
                      name: "images/[hash]-[name].[ext]",
                    },
                  },
                ],
              },
            {
                test: /\.(css|scss)$/, // test for .sass y css files
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    plugins: [
        new htmlwebpackplugin({ // create a new htmlwebpackplugin
            template: './public/index.html', // template file
            filename: './index.html' // output file name
        }),
        new miniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            },
          compress: true,
          port: 3005,
          open: true,
          historyApiFallback: true,
        }
}
