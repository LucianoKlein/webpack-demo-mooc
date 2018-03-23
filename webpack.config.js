const path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

webpackConfig = {
   entry: './src/app.js',
   output: {
       path: path.resolve(__dirname, './dist/'),
       filename: 'js/[name].bundle.js',
   },
   mode: 'development',
   plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
   ]
};
module.exports = webpackConfig;