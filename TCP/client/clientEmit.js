$(function () {
    var socket = io.connect('http://localhost:3035');
    /*�ͻ��˵�¼*/
    socket.emit('join', $("#userName").text());

    /*����������*/
    $('#publicSay').submit(function () {
        var content = $('#publicSayContent').val();
        socket.emit('publicSay', content);
        return false;
    });

    /*˽��������*/
    $(".roomList").click(function () {
        socket.emit('join private room', $(this).text());
        console.log(socket);
    });
});