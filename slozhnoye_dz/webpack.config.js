const path = require('path'); //упрощает работу с путями папками


module.exports = {
	devtool: 'inline-source-map',
	entry: {
		js: path.join(__dirname, 'client/client.js') //входной файл
	},
	output: {
		path: path.join(__dirname, 'static'), //выходной файл
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader'}
		]
	}
}