'use strict';
var map_to_four_multiples_add_one = function(collection){
	var res = [];
	collection.forEach(function(val){
		res.push(val*4+1);
	});
	return res;
};

module.exports = map_to_four_multiples_add_one;
