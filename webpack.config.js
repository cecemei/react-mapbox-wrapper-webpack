module.exports = {
    entry: './dev/index.jsx',
    output: {
        filename: './dev/bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
              test: /\.css/,
              loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'source-maps',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }

};
