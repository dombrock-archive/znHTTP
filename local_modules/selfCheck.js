exports.check = function selfCheck(req,res,scriptName){
  //make sure no one can see the server script
  if(req.url=="/"+scriptName){
  	console.log('hit self check');
    res.writeHead(300, {'Content-Type': 'text/html'});
    res.end();
    return true;
  }
  return false;
}