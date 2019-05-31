const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


let config = {
    entry:  __dirname + '/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'index.bundle.js'
    },
    devServer: {
        host: 'localhost',
        port: 8085,
        contentBase: __dirname + '/build',
        inline: true,
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react']
                            }
                        }
                    ],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader'],
                exclude: /node_modules/
            },
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
				{
					loader: 'file-loader',
					options: {
						 outputPath: 'assets/images'
					}
				}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
				{
					loader : 'file-loader',
					options: {
						outputPath: 'assets/fonts'
					}
				}
				]
			}
        ]
    },
    devtool: "cheap-module-eval-source-map",
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
            path: path.resolve(__dirname + '/build/css')
        }),
  
		new HtmlWebpackPlugin({
			template: 'index.html',
			title: 'Gamification'
		})

    ]

}

module.exports = config;