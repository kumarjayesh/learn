var fs  = require('fs');
var cnt = undefined;

fs.readFile(process.argv[2], function callback(err, data){
  cnt = data.toString().split('\n').length - 1;
  console.log(cnt);
  });

//console.log("Count before reading te file: " + cnt);
