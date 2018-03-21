
# 命令行部分
./node_modules/.bin/webpack-cli hello.js -o hello.bundle.js --mode development --module-bind 'css=style-loader!css-loader'
./node_modules/.bin/webpack-cli hello.js -o hello.bundle.js --mode development --module-bind 'css=style-loader!css-loader' --watch
./node_modules/.bin/webpack-cli hello.js -o hello.bundle.js --mode development --module-bind 'css=style-loader!css-loader' --progress --display-modules

