exports.show = function show404(res,error404){
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write(error404);
  return;
}