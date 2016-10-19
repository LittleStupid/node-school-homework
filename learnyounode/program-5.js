var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir( folder, function(err, list) {
  if(err) {
    console.log(err);
  } else {
    if( list && list.length ) {
      list.forEach( function( fileName ) {
        if( path.extname(fileName) === ext ) {
          console.log( fileName );
        }
      });
    }
  }
});
