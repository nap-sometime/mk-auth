const path = require('path');
const { readFileSync } = require('fs');

module.exports = {
	lintOnSave: false,
	filenameHashing: false,
	productionSourceMap: false,
	configureWebpack: {
		output: {
			libraryTarget: 'system',
			path: path.resolve(__dirname, 'dist'),
			// chunkFilename: '[name].bundle.js',
		},
		devtool: 'source-map',
		module: {
			rules: [{ parser: { system: false } }],
		},
		externals: ['vue', 'vue-router', /^@ag1\/.+/],
		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			disableHostCheck: true,
			sockPort: 8001,
			sockHost: 'localhost',
			port: 8001,
			https: {
				cert: readFileSync(path.join(__dirname, '../cert/cert.pem')),
				key: readFileSync(path.join(__dirname, '../cert/key.pem')),
			},
		},
	},
};
