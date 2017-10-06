const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('createMessage', (message) => {
        message.createdAt = 676;
        console.log('createMessage: ', message);
    });

    socket.emit('newMessage', {
        from: 'me',
        text: 'This is a test message',
        createdAt: 456
    });

    socket.on('disconnect', () => {
        console.log('Client was disconnected');
    });
});

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});