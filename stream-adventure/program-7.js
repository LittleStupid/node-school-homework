var http = require('http');
var through = require('through2');
var tr = through(write, end);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

var server = http.createServer( function(req, res) {
  if(req.method === 'POST') {
    req.pipe(tr).pipe(res);
  }
})

server.listen(process.argv[2]);
