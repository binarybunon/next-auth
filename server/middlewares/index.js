const expressJwt = require('express-jwt');

module.exports.requireSignin = expressJwt({
	getToken: (req, res) => req.cookies.token,
	secret: process.env.JWT_SECRET,
	algorithms: ['HS256'],
});
