var socket = io.connect('http://localhost:3035');

/*֪ͨ����ˣ��пͻ��˽���*/
socket.emit('join', {
    username: 'client'
});