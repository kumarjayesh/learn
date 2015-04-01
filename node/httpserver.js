var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
  request.setEncoding('utf8')
  request.on('data',function(data){
    response.write(data.toUpperCase());
  })
})
server.listen(process.argv[2])

/*
var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))
    */
