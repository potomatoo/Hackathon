const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'https://save-dogs-server-oncpl.run.goorm.io',
			changeOrigin: true,
			pathRewrite: {
				'^/api': ''
			}
		})
	);
};
