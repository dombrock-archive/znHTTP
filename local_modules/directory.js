exports.list = function(filename,res,fs){
	if(filename.substring(0,10) == "_DIRECTORY"){
	  console.log("listing directory");
	  const files = fs.readdirSync(filename.substring(12));
	  for (var i in files) {
	    console.log(files[i]);
	    res.write("<a href='"+files[i]+"'>"+files[i]+"</a></br>");
	  }
	  res.end();
	  return true;
	}
	return false;
};