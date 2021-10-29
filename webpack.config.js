const path = require('path')
module.exports = {
	entry: ["./src/events.js", "./src/App.jsx", "./src/legado.js"],
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		static: './dist',
	},
	mode: "development",
	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
}