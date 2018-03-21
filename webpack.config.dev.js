const path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

webpackConfig = {
   entry: {
       main: './src/script/main.js',
       a: './src/script/a.js'
   },
   output: {
       path: path.resolve(__dirname, './dist/'),
       filename: 'js/[name]-[chunkhash].js',
       publicPath: 'http://cdn.com/'
   },
   mode: 'development',
   plugins: [
       new htmlWebpackPlugin({
           filename: 'index.html',
           template: 'index.html',
           inject: 'head',
           title: 'webpack is aaaaaaaaaawesome',
           time: new Date()
       })
   ]
};

module.exports = webpackConfig;