var through2 = require('through2');
var split = require('split');

var odds = true;

process.stdin
  .pipe(split())
  .pipe(through2(function(line, _, next) {
    if( odds ) {
      this.push(line.toString().toLowerCase() + '\n');
    } else {
      this.push(line.toString().toUpperCase() + '\n');
    }
    odds = !odds;
    next();
  }))
  .pipe(process.stdout)
