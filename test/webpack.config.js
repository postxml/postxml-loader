const plugin = require('./plugin')

module.exports = {
	entry: './test/app.js',
	output: {
		path: './test/results',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				loaders: [
					'file?name=[name].bundle.[ext]',
					'../index.js?bla=true'
				]
			}
		]
	},
	postxml: [plugin()]
}
