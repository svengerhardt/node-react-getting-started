"use strict";

let Fs = require("fs");
let Path = require("path");
let Webpack = require("webpack");

let CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {

    // http://webpack.github.io/docs/configuration.html#target
    target: "web",

    // http://webpack.github.io/docs/configuration.html#entry
    entry: {
        bundle: "./frontend/app"
    },

    // http://webpack.github.io/docs/configuration.html#output
    output: {

        // http://webpack.github.io/docs/configuration.html#output-path
        path: "./public",

        // http://webpack.github.io/docs/configuration.html#output-filename
        filename: "[name].js?[chunkhash]",

        // http://webpack.github.io/docs/configuration.html#output-publicpath
        publicPath: "/public/",

        // http://webpack.github.io/docs/configuration.html#output-pathinfo
        pathinfo: false
    },

    // http://webpack.github.io/docs/configuration.html#debug
    debug: false,

    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: null,

    // http://webpack.github.io/docs/configuration.html#profile
    profile: false,

    // http://webpack.github.io/docs/configuration.html#module
    module: {
        loaders: [

            // https://github.com/babel/babel-loader
            {
                test: /\.js?/,
                loader: "babel-loader",
                query: { presets: ["react", "es2015", "stage-2"] },
                exclude: /node_modules/
            },

            // https://github.com/jtangelder/sass-loader
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "css?sourceMap!" +
                    "sass?sourceMap"
                )
            },

            // https://github.com/webpack/url-loader
            {test: /\.jpg$/,   loaders: ["url?limit=10000"]},
            {test: /\.jpeg$/,  loaders: ["url?limit=10000"]},
            {test: /\.png$/,   loaders: ["url?limit=10000"]},
            {test: /\.gif$/,   loaders: ["url?limit=10000"]},
            {test: /\.svg$/,   loaders: ["url?limit=10000"]},
            {test: /\.woff$/,  loaders: ["url?limit=100000"]},
            {test: /\.woff2$/, loaders: ["url?limit=100000"]},

            // https://github.com/webpack/file-loader
            {test: /\.ttf$/, loaders: ["file"]},
            {test: /\.eot$/, loaders: ["file"]},
            {test: /\.wav$/, loaders: ["file"]},
            {test: /\.mp3$/, loaders: ["file"]}
        ]
    },

    // http://webpack.github.io/docs/list-of-plugins.html
    plugins: [

        // Pro-tip: Order matters here.

        // https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
        new Webpack.optimize.UglifyJsPlugin({mangle: {
            except: ["$", "window", "document", "console"]
        }}),

        new ExtractTextPlugin("[name].css?[contenthash]"),

        // https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
        new Webpack.optimize.CommonsChunkPlugin("vendors", "vendors.js?[chunkhash]"),

        function () {
            this.plugin("done", function (stats) {
                let jsonStats = stats.toJson({
                    chunkModules: true
                });
                jsonStats.publicPath = "/public/";
                Fs.writeFileSync(
                    Path.join("./public", "assets.json"),
                    JSON.stringify(jsonStats.assetsByChunkName)
                )
            })
        }
    ]
};

module.exports = config;