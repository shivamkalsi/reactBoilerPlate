
var express=require('express');
var app=express();

const Port=process.env.PORT||3000;

app.use(express.static('public'));

var server=app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});