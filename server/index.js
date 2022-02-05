const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');
const mongoose = require('mongoose');
var csurf = require('csurf');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv').config();

const csrfProtection = csurf({ cookie: true });

// create express app
const app = express();

// db
mongoose
	.connect(process.env.DATABASE, {
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useNewUrlParser: true,
	})
	.then(() => console.log('**DB CONNECTED**'))
	.catch((err) => console.log('DB CONNECTION ERR => ', err));

// apply middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// route
readdirSync('./routes').map((r) => app.use(`/api`, require(`./routes/${r}`)));
// csrf
app.use(csrfProtection);

app.get('/api/csrf-token', (req, res) => {
	res.json({ csrfToken: req.csrfToken() });
});

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
