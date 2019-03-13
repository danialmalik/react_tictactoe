const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/index.html', // source html file
    filename: './index.html'        // output file to be generated in "dist/" folder.
});

// Path module.
const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'index.js'
    },
    module: {
        rules: [
            {

                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                // loaders are run from right to left. so first css should be transformed and then styes should
                // be applied.
                use: ["style-loader","css-loader"]
                
            }
        ]
    },
    plugins: [htmlWebpackPlugin]
};
