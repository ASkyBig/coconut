var socket = io.connect('http://localhost:3088');

socket.on('message', function (msg) {
    $('#messages').append($('<li>').text(msg));
});

//�յ����������ҹ㲥����ʾ��Ϣ
socket.on('broadcast_join', function (data) {
    console.log(data.username + '������������');
});

//�յ��뿪�����ҹ㲥����ʾ��Ϣ
socket.on('broadcast_quit', function (data) {
    console.log(data.username + '�뿪��������');
});

//�յ����˷��͵���Ϣ����ʾ��Ϣ
socket.on('broadcast_say', function (data) {
    console.log(data.username + '˵: ' + data.text);
});