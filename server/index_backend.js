const express = require('express');
const app = express();
const port = 4000;

const config = require('./config/key');

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('hihi backend'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))