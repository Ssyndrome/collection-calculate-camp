'use strict';

function choose_even(collection) {
	var result = [];
	collection.forEach(function(val){
		if(val%2 ===0){
			result.push(val);
		}
	});
	return result;
}

module.exports = choose_even;
