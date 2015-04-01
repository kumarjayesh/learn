/*console.log("HELLO WORLD");

/* Exercise 9

*/

var http = require('http')

var urls = process.argv.slice(2);
var count = urls.length;
var responses = [];


for (i=0; i < urls.length; i++){
  setImmediate(function (position){
    http.get(urls[position], function(res){
      res.setEncoding('utf8');
      var body1 = '';
      res.on('data',function(data){
        body1 += data;
      })
      res.on('end',function(){
        responses[position]=body1;
        printresponse();
      })
    })
  },i)
}

function printresponse () {
  if (--count>0) return;
  console.log(responses.join('\n'))
}


/*
var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3)
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)

      */
