var filterModul = require('./readDirModule-6.js');

var dir = process.argv[2];
var ext = process.argv[3];

filterModul( dir, ext, function(err, datas) {
  if(err) {
    console.log(err);
  } else {
    if(datas && datas.length) {
      datas.forEach( function(data) {
        console.log(data);
      });
    }
  }
});
