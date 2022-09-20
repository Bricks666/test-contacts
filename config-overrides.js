const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

/**
 *
 * @param {import('webpack').Configuration} config
 * @param {object} env
 * @returns {import('webpack').Configuration}
 */
module.exports = function override(config, env) {
	return {
		...config,
		resolve: {
			...config.resolve,
			plugins: [
				...config.resolve.plugins,
				new TsconfigPathsPlugin({
					configFile: './tsconfig.json',
				}),
			],
		},
	};
};
