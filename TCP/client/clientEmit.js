var socket = io.connect('http://localhost:3035');
$(function () {
    /*֪ͨ����ˣ��пͻ��˽���*/
    socket.emit('join', {
        username: 'client'
    });

    /*�����·���*/
    $("#createRoom").submit(function () {
        socket.emit();
    });
});

