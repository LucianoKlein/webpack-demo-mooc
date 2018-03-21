
# 命令行部分
./node_modules/.bin/webpack-cli hello.js -o hello.bundle.js --mode development --module-bind 'css=style-loader!css-loader'
./node_modules/.bin/webpack-cli hello.js -o hello.bundle.js --mode development --module-bind 'css=style-loader!css-loader' --watch
./node_modules/.bin/webpack-cli hello.js -o hello.bundle.js --mode development --module-bind 'css=style-loader!css-loader' --progress --display-modules
./node_modules/.bin/webpack-cli hello.js -o hello.bundle.js --display-reasons

#学习config文件
./node_modules/.bin.webpack-cli --config ./xxx.config.js
./node_modules/.bin_webpack-cli --config webpack.config.dev.js