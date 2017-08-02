'use strict';

function amount_even(collection) {
	var res = 0;
	collection.forEach(function(val){
		if(val%2 === 0){
			res += val;
		}
	});
	return res;
}
module.exports = amount_even;
