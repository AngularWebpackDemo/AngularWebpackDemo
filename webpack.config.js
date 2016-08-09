var path = require('path');

console.log(path)
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var VIEW_PATH = path.resolve(ROOT_PATH, 'app');
module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'AngularSample',
            template: './app/jade/index.jade'
        })
    ],

    //
    //resolve: {fallback: path.join(__dirname, "jade")},
    //resolveLoader: {
    //    fallback: path.join(__dirname, "jade")
    //
    //},

    module: {
        loaders: [
            // CSS文件方式
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: APP_PATH
            },

            //SASS方式
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: APP_PATH
            },
            //{
            //    test: /\.(png|jpg)$/,
            //    loader: 'url?limit=40000'
            //},
            {
                test: /\.(png|jpe?g|eot|svg|ttf|woff2?)$/,
                loader: "file?name=images/[name].[ext]"
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },
            // jade模版
            {test: /\.jade$/, loader: "jade",include: VIEW_PATH},


            // html模版
            {
                test: /\.html$/,
                loader: "raw",
                include: VIEW_PATH
            },
            // jade模版
            //{ test: /\.jade$/, loader: "jade-html" },

            //{ test: /\.html/, loader: "raw" }
            //stylus
            {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},

            {
                test: /\.less$/,
                loader: "style!css!less"
            },

            // 字体Loader
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.woff2$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=image/svg+xml'
            }

        ]
    },

    //devServer: {
    //    historyApiFallback: true,
    //    hot: true,
    //    inline: true,
    //    progress: true,
    //    proxy:{
    //        '/mock/*':{
    //            target: 'http://192.168.0.30/mockjsdata/12',
    //            rewrite : function(req,header){
    //                req.url = req.url.replace(/^\/mock/,'');
    //                console.log(req.url);
    //            },
    //            changeOrigin: true,
    //            secure: false
    //        }
    //    }
    //},
};