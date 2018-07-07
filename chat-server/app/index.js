let app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

io.on('connection', (socket) => {

    socket.on('disconnect', () => io.emit('user-changed', { user: socket.nickname, event: 'left' }));

    socket.on('set-nickname', (nickname) => {
        socket.nickname = nickname;
        io.emit('user-changed', { user: nickname, event: 'joined' });
    });

    socket.on('add-message', (message) =>
        io.emit('message', { text: message.text, from: socket.nickname, created: new Date() })
    );
});

var HOST = '192.168.1.165';
var PORT = 3000;

http.listen(PORT, () =>
    console.log(`Running on http://${HOST}:${PORT}`)
)