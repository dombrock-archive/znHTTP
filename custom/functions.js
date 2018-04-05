const example = require('./examples/exampleapi');
const example2 = require('./examples/api2');
exports.functions = function (res,req,requestName,q){
	var data; //if returned as undefined, no overwrite
	//your code here
	data = example.api(requestName, data,q);
	data = example2.api(requestName, data,q);
	return data;
};