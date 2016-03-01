module.exports = {
    entry: [
        "./app/src/01_test.js",
        "./app/src/02_test.js",
        "./app/src/03_test.js",
        "./app/src/04_test.js",
        "./app/src/05_test.js",
        "./app/src/06_test.js",
        "./app/src/07_test.js",
        "./app/src/08_test.js",
        "./app/src/09_test.js"
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
