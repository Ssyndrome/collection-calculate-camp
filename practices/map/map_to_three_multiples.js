'use strict';
var map_to_three_multiples = function(collections){
	var res = [];
	collections.forEach(function(val){
		res.push(get_string(val));
	});
	return res;
};
function get_string(a){
	if(a <= 26){
		return(String.fromCharCode(a+96));
	}else if(a%26 === 0){
		return(String.fromCharCode(parseInt(a/26)+95)+'z');
	}else{
		return(String.fromCharCode(parseInt(a/26)+96)+String.fromCharCode(a%26+96));
	}
}
module.exports = map_to_three_multiples;
