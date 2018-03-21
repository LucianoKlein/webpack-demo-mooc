const path = require('path');

webpackConfig = {
   entry: ['./src/script/main.js', './src/script/a.js'],
   output: {
       path: path.resolve(__dirname, './dist/js'),
       filename: 'bundle.js'
   },
   mode: 'development'
};

module.exports = webpackConfig;