const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle_[hash].js',
		publicPath: '/public',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', {
					loader: 'css-loader',
					options: {
						modules: true,
					}
				}, 'sass-loader']
			}
		]
	},
	devServer: {
		port: process.env.PORT || 3000,
		historyApiFallback: true
	}
};
