var http = require('http');
var datas = [];
var finish_num = 0;

var printAll = function() {
  if(finish_num>=3) {
    datas.forEach( function(data){
      console.log(data);
    } );
  }
}

var getUrlData = function(url, index){
http.get(url, function(res) {
    var str = "";

    res.setEncoding('utf8')

    res.on("data", function(data) {
      str += data;
    })
    res.on("end", function() {
      // console.log(str);
      datas[index] = str;
      finish_num += 1;
      printAll();
    })

    res.on("error", console.error)

  }).on("error", console.error);
}


getUrlData(process.argv[2], 0);
getUrlData(process.argv[3], 1);
getUrlData(process.argv[4], 2);
