exports.api = function(requestName,data,q){
	if(requestName=="./web/apitest"){
		data = "hit api"+q.search;
		return data;
	}
	return data;
};