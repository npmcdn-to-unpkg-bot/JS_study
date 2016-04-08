var start_index = 1;
var end_index = 21;

var getEntry = function(){
    var entry = {};
    var i, key;
    for(i = start_index; i <= end_index; i++){
        var prefix = '';
        switch(true){
            case i >= 1 && i <= 9: prefix = '00'; break;
            case i >= 10 && i <= 99:  prefix = '0'; break;
            default:  prefix = '';
        }
        key = prefix + i;
        entry[key] = './' + key + '_task/main.js';
        // entry[key] = ['babel-polyfill', './' + key + '_task/main.js'];
    }
    return entry;
};

module.exports = {
    entry: getEntry(),
    output: {
        path: __dirname,
        filename: "./[name]_task/dist/main.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
