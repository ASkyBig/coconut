var socket = io.connect('http://localhost:3035');

socket.on('');

socket.on('newOne', function (msg) {
    console.log('newOne:' + msg);
    document.getElementById('onlineNum').innerHTML = msg;
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