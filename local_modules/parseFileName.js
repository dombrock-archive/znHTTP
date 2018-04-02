exports.parse = function parseFileName(req,qpath,path){
//qpath should be q.pathname
  var filename = "./web/" + qpath;
  //direct the root of directories to an index.html
  if(req.url.slice(-1)=="/"){
    filename +="index.html";
  }
  //when a file type is not specified, make it html
  else if(path.extname(req.url).includes(".")==false){
    filename += ".html"
  }
  return filename;
}