// when put folder containing this file onto GitHub, the node_modules sub-folder is ignored; only the package.json file becomes committed
// that way you don't bring over megabytes of packages and libraries etc; you just tell user which packages and libraries
// to pull from sources and install

// Node server
var http = require('http');
var path = require('path');

var express = require('express');

var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));    // users ony have access to client sub-folder

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});

// navigate to exercises/nodeExpressStaticServer
// run the following command: node index.js
// hover over 0.0.0.0:8080
// open page by clicking
// http://majorstudio1-julianhlange.c9users.io:8080/
// add onto end of address /img/WhatsApp Image 2017-10-29 at 5.41.47 PM.jpeg
// this will open that image