'use strict';

function compute_average(collection) {
	var res = 0;
	collection.forEach(function(val){
		res += val;
	});
	return res/collection.length;
}
module.exports = compute_average;

