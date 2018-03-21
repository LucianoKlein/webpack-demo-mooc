const path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

webpackConfig = {
   entry: {
       main: './src/script/main.js',
       a: './src/script/a.js',
       b: './src/script/b.js',
       c: './src/script/c.js'
   },
   output: {
       path: path.resolve(__dirname, './dist/'),
       filename: 'js/[name]-[chunkhash].js',
       publicPath: 'http://cdn.com/'
   },
   mode: 'development',
   plugins: [
       new htmlWebpackPlugin({
           filename: 'a.html',
           template: 'index.html',
           title: 'this is a.html',
           inject: false,
           time: new Date(),
           excludeChunks: ['b', 'c']
       }),
       new htmlWebpackPlugin({
           filename: 'b.html',
           template: 'index.html',
           title: 'this is b.html',
           inject: false,
           time: new Date(),
           excludeChunks: ['a', 'c']
       }),
       new htmlWebpackPlugin({
           filename: 'c.html',
           template: 'index.html',
           inject: false,
           title: 'this is c.html',
           time: new Date(),
           excludeChunks: ['a', 'b']
       })
   ]
};
module.exports = webpackConfig;