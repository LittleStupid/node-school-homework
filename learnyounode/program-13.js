var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
  reqInfo = url.parse(req.url);
  var resJson = {};

  if( !isTimeQuery(reqInfo.pathname) ) {
    return ;
  }

  var date = new Date( reqInfo.search.substring(5) );

  if( isIsoTimeQuery( reqInfo.pathname ) ){
    sendResponse( res, JSON.stringify(getIsoTime(date)) );
  } else if( isUnixTimeQuery(reqInfo.pathname) ) {
    sendResponse( res, JSON.stringify(getUnixTime(date)) );
  }
})

function sendResponse( res, msg ) {
  if( !res ) return;
  if( !msg ) return;

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write( msg );
  res.end();
}

function getIsoTime( time ) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function getUnixTime(time) {
  return {
    unixtime: time.getTime()
  };
}

function isIsoTimeQuery(str) {
  return str === "/api/parsetime";
}

function isUnixTimeQuery(str) {
  return str === "/api/unixtime";
}

function isTimeQuery(str) {
  return isIsoTimeQuery(str) || isUnixTimeQuery(str);
}

server.listen(process.argv[2]);
