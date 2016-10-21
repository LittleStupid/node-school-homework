var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');

stream.write('hello\n');
// var Readable = require('stream').Readable;
// var s = new Readable;
// s.push('hello\n');
// s.push(null);
//
// s.pipe(stream);
