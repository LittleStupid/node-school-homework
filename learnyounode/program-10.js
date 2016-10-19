var net = require('net');

var server = net.createServer( function(socket){
  // socket.write(getTime());
  socket.end(getTime());
});

var fillZero = function(i) {
  return (i < 10 ? '0' : '') + i;
}

var getTime = function() {
  var date = new Date();
  var str = "";

  str += date.getFullYear();
  str += '-';
  str += fillZero(date.getMonth() + 1);
  str += '-';
  str += fillZero(date.getDate());

  str += ' ';

  str += fillZero(date.getHours());
  str += ':';
  str += fillZero(date.getMinutes());

  str += '\n';

  return str;
}

server.listen(process.argv[2]);
