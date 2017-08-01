'use strict';
function map_to_even(collection){
	var res = [];
	collection.forEach(function(val){
		res.push(val*2);
	});
	return res;
}
module.exports = map_to_even;
