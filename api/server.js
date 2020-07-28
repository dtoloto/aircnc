const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');
const routes = require('./routes/routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

const urlMongo = 'mongodb://<DB_USER>:<DB_PASS>@<DB_HOST>';

mongoose.connect(urlMongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
})

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})

app.use(cors());

app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, 'uploads')))

app.use(routes);

server.listen(5000);
