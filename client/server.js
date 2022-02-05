const express = require('express');
const next = require('next');

const { createProxyMiddleware } = require('http-proxy-middleware');
const { append } = require('express/lib/response');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();

		if (dev) {
			server.use(
				'/api',
				createProxyMiddleware({
					target: 'https://next-auth-sample.herokuapp.com',
					changeOrigin: true,
				})
			);
		}

		server.all('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(3000, (err) => {
			if (err) throw Error(err);
			console.log('=> Proxy Ready');
		});
	})
	.catch((err) => {
		console.log(err);
	});
