var ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var path = require('path');


var config = {
    entry: {
        main: './main'
    },
    output: {
        path:path.join(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'main.js'
    },
    module:{
       rules:[
           {
               test: /\.vue$/,
               loader:'vue-loader',
               options:{
                   loaders:{
                       css:ExtractTextPlugin.extract({
                           use:'css-loader',
                           fallback:'vue-style-loader'
                       })
                   }
               }
           },
           {
               test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
               loader:'url-loader?limit=1024'
           },
           {
               test:/\.js$/,
               loader:'babel-loader',
               exclude:/node_modules/
           },
           {
               test:/\.css$/,
               use:ExtractTextPlugin.extract({
                   use:'css-loader',
                   fallback:'style-loader'
               })
           }
       ]
    },
    plugins:[
        new ExtractTextPlugin("main.css"),
        new VueLoaderPlugin()
    ]
};
module.exports = config;