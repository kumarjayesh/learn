
var http = require('http');

function parsetime (timeTemp) {
  return {
    hour: timeTemp.getHours(),
    minute: timeTemp.getMinutes(),
    second: timeTemp.getSeconds()
  }
}

var server = http.createServer (function(request, response){
  var urlparam=require('url').parse(request.url,true).pathname
  var date = new Date(urlparam.query.iso);

  if (urlparam === '/api/parsetime'){
    response.writeHead(200,{'content-type':,'application/json'});
    result = parsetime (date, res);
    response.end(JSON.stringify(result));
  }
});
server.listen(Number(process.argv[2]))

/*
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true),
      pathname = urlObj.pathname,
      strtime = urlObj.query.iso,
      result;

  if (pathname === '/api/unixtime') {
     result = getUnixTimestamp(strtime);
  }
  else if (pathname === '/api/parsetime') {
    result = getTimeObj(strtime);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  }
  else {
    res.writeHead(404);
    res.end();
  }

}).listen(process.argv[2]);


function getUnixTimestamp(strtime) {
  return {
    unixtime: getTimestamp(strtime)
  };
}

function getTimestamp(strtime) {
  return Date.parse(strtime);
}

function getTimeObj(strtime) {
  var date = new Date(getTimestamp(strtime));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}
*/
