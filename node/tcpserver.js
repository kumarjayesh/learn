var net = require('net')
var server = net.createServer(function (socket){
  function now(){
    var date = new Date();
    return date.getFullYear()+'-'
      +(date.getMonth()<10?'0'+(date.getMonth()+1):date.getMonth()+1)+'-'
      +date.getDate()+' '
      +date.getHours()+':'
      +date.getMinutes()
  }

  socket.write(now()+'\n')
  socket.end();
})
server.listen(process.argv[2])
