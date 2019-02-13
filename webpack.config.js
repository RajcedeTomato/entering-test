var path = require('path');

module.exports = {
    entry: './script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module:
    {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
            ,
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            }
        ]
    }

};