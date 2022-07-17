const express = require('express');
const mongoose = require('mongoose');
const bodtParser = require('body-parser');
const config = require('./config/server.config');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodtParser.json());
// Database connection
mongoose.connect(config.mongo_url, () => {
    console.log(`Database connected`);
})

// Routes for all 
require('./routes/item.routes')(app);
require('./routes/auth.routes')(app);

// Server listen on
app.listen(config.port, () => {
    console.log(`Server listen on port ${config.port}`);
})