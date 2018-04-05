const querystring = require('querystring');
exports.api = function(requestName,data,q){
	if(requestName=="./web/api2"){
		const query = querystring.parse(q.search.substring(1));
		data = query.search;
		return data;
	}
	return data;
};