var http = require('http');

http.get(process.argv[2], function(res) {
  var total = 0;
  var str = "";

  res.setEncoding('utf8')

  res.on("data", function(data) {
    total += data.length;
    str += data;
  })
  res.on("end", function() {
    console.log(total);
    console.log(str);
  })
  
  res.on("error", console.error)

}).on("error", console.error);
