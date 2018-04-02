const http = require('http');
const https = require('https');
const url = require('url');
const fs = require('fs');
const path = require('path');
//local modules
const selfCheck = require('./local_modules/selfCheck');
const parseFileName = require('./local_modules/parseFileName');
const handleMIME = require('./local_modules/handleMIME');
const show404 = require('./local_modules/show404');
//server constants
const scriptName = path.basename(__filename);
const error404 = fs.readFileSync('./404.html', 'utf8');

http.createServer(function (req, res) {
  console.log("REQUEST FROM: "+req.connection.remoteAddress);
  if(selfCheck.check(req,res,scriptName)){
    return;
  }
  //parse the url
  const q = url.parse(req.url, true);
  const filename = parseFileName.parse(req,q.pathname,path);
  //serve the file
  console.log("requested: "+filename);
  fs.readFile(filename, function(err, data) {
    if (err) {
      show404.show(res,error404);
      return res.end();
    }  
    handleMIME.handle(res,req,filename,fs,path);
    res.write(data);
    return res.end();
  });
}).listen(80);
