const path = require('path')

module.exports = {
	lintOnSave: false,
	filenameHashing: false,
	productionSourceMap: false,
	configureWebpack: {
		output: {
			libraryTarget: "system",
			path: path.resolve(__dirname, "dist"),
		},
		externals: ["vue", "vue-router", /^@ag1\/.+/],
		devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      disableHostCheck: true,
      sockPort: 8001,
      sockHost: "localhost",
      port: 8001,
      https: true,
    },
	}
}