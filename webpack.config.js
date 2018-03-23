const path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

webpackConfig = {
   entry: './src/app.js',
   output: {
       path: path.resolve(__dirname, './dist/'),
       filename: 'js/[name].bundle.js',
   },
   mode: 'development',
   module: {
       rules: [
           {
               test: /\.js$/,
               loaders: "babel-loader",
               exclude: /node_modules/,
               include: path.resolve(__dirname, "./src/"),
           },
           {
               test: /\.css$/,
               use: [
                   'style-loader',
                   {
                       loader: 'css-loader', 
                       options: { importLoaders: 1 }
                   },
                   {
                       loader: 'postcss-loader',
                       options: {
                           ident: 'postcss',
                           plugins: (loader) => [
                               require('postcss-import')({ root: loader.resourcePath }),
                               require('autoprefixer')({ browsers: ['last 5 version'] }),
                           ]
                       }
                   }
               ]
           }
       ]    
   },
   devServer: {
       contentBase: path.resolve(__dirname, "./dist"),
       compress: true,
       port: 9001,
       host: "0.0.0.0"
   },
   plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
   ]
};
module.exports = webpackConfig;