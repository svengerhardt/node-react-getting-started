"use strict";

let CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

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
        filename: "[name].js?",

        // http://webpack.github.io/docs/configuration.html#output-publicpath
        publicPath: "http://localhost:3030/public/",

        // http://webpack.github.io/docs/configuration.html#output-pathinfo
        pathinfo: true
    },

    // http://webpack.github.io/docs/configuration.html#debug
    debug: true,

    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: "source-map",

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

            // https://github.com/webpack/css-loader
            {test: /\.css$/, loaders: ["style", "css"]},

            // https://github.com/jtangelder/sass-loader
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},

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

    plugins: [

    ]
};

module.exports = config;