// webpack.config.js

// this module is imported by webpack during the runtime
// and will generate the output file based on the cofiguration
// done here.

let path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        'main': path.join(__dirname, 'src', 'main.js')
    },
    output: {
        filename: 'dist/[name]-build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']                
            },
            {
                test: /\.ts$/,
                loader: ['ts-loader']                
            }
        ]
    }
};

// npm run build