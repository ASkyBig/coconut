var socket = io.connect('http://localhost:3088');

/*֪ͨ����ˣ��пͻ��˽���*/
socket.emit('join', {
    username: 'client'
});