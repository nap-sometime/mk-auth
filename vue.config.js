const path = require('path');
const { readFileSync } = require('fs');

module.exports = {
	lintOnSave: false,
	filenameHashing: false,
	productionSourceMap: false,
	configureWebpack: {
		output: {
			path: path.resolve(__dirname, 'dist'),
			chunkFilename: 'js/[name].bundle.js',
		},
		externals: ['vue', 'vue-router', /^@ag1\/.+/],
		resolve: {
			alias: {
				'~/*': path.resolve(__dirname, 'src/'),
				'@/*': path.resolve(__dirname, 'src/'),
			},
		},
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
