//files types
const ftypes = require('./mtypes')
exports.handle = function handleMIME(res,req,filename,fs,path){
    const stats = fs.statSync(filename);
    const ext = path.extname(req.url).substring(1);
    //handle images
    if(ftypes.imageTypes.some(e1 => ext.toUpperCase().includes(e1.toUpperCase()))){
      res.writeHead(200, {'Content-Type': 'image/'+ext, "Content-Length": stats.size});
    }
    //handle audio
    else if(ftypes.audioTypes.some(e1 => ext.toUpperCase().includes(e1.toUpperCase()))){
      res.writeHead(200, {'Content-Type': 'audio/'+ext, "Content-Length": stats.size});
    }
    //handle video
    else if(ftypes.videoTypes.some(e1 => ext.toUpperCase().includes(e1.toUpperCase()))){
      res.writeHead(200, {'Content-Type': 'video/'+ext, "Content-Length": stats.size});
    }
    else{
      res.writeHead(200, {'Content-Type': 'text/html'});
    }
}