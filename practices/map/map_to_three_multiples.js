'use strict';
var map_to_three_multiples = function(collections){
	var res = collections.map(function(i){return i*3;});
	return res;
};
module.exports = map_to_three_multiples;
