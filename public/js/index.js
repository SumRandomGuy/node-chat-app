var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    socket.on('newMessage', function (message) {
        console.log('New Message', message);
    });

    socket.emit('createMessage', {
        to: 'user1',
        text: 'Hello there'
    });
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newEmail', function (email) {
    console.log('New email: ', email);
});