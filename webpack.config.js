var path = require("path");

module.exports = {
    entry: ["./src/index.tsx"],
    mode: "development",
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/dist'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]                
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};