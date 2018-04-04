exports.parse = function parseFileName(req,qpath,path,fs){
  //qpath should be q.pathname
  var filename = "./web" + qpath;
  //direct the root of directories to an index.html
  console.log(filename);
  if(req.url.slice(-1)=="/"){
    if (fs.existsSync(filename+"index.html")==false && fs.existsSync(filename)==true) {
      filename = "_DIRECTORY: "+filename;
    }else{
      filename +="index.html";
    }
  }
  //when a file type is not specified, make it html
  else if(path.extname(req.url).includes(".")==false){
    filename += ".html"
  }
  return filename;
}