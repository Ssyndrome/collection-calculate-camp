'use strict';

function calculate_elements_sum(collection) {
	var res = 0;
	collection.forEach(function(val){
		res += val;
	});
	return res;
}
module.exports = calculate_elements_sum;

