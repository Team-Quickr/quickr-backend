
// imports
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({secret: 'secret key', saveUninitialized: true, resave: false}));

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

// set template engine
app.set('view engine', 'ejs');

// Route prefix
app.use("", require("./routes/routes"));

// database connection
mongoose.connect(DB_URL);
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log(`Connected to database`));

// Server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Started on http://localhost:${PORT}`);
});

// mongodb+srv://backend_username:<password>@cluster0.zfqwrom.mongodb.net/?retryWrites=true&w=majority
