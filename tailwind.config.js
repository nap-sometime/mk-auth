const isProd = ['runtest', 'production'].some((v) => process.env.NODE_ENV === v);

module.exports = {
	purge: {
		enable: isProd,
		content: ['./src/**/*.vue'],
	},
	theme: {
		extend: {},
		container: {
			padding: {
				default: '1rem',
				lg: '2rem',
			},
		},
	},
	variants: {},
	plugins: [],
};
