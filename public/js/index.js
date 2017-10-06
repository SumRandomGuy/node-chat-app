var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    socket.on('newMessage', function (message) {
        console.log('New Message', message);
    });

    socket.on('userJoin', function (message) {
        console.log('New User Joined:', message);
    });
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newEmail', function (email) {
    console.log('New email: ', email);
});