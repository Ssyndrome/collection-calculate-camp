'use strict';
var number_map_to_word = function(collection){
	var res = [];
	collection.forEach(function(val){
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
module.exports = number_map_to_word;
