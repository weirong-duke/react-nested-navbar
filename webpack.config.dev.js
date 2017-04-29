var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [{
                test: /\.scss?$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', 'scss']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
};
