var fs = require('fs');
var path = require('path');

module.exports = function( dir, ext, callback ) {
  var _ext = '.' + ext;
  fs.readdir( dir, function(err, list) {
    if(err) {
      return callback(err, null);
    } else {
      if( list && list.length ) {
        list = list.filter(function (file) {
          if(path.extname(file) === _ext) return true;
        })
        return callback(null, list);
      }
    }
  });
};
