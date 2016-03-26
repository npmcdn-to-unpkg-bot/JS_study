module.exports = {
    entry: [
        "./app/src/app.js"
    ],
    output: {
        path: __dirname,
        filename: "./app/dist/main.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
