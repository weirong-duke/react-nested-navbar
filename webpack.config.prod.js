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
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader!babel-loader'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
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
