'use strict';

function hybrid_operation_to_uneven(collection) {
	var collection_ = [];
	collection.forEach(function(val){
		if(val%2 !== 0){
			collection_.push(val*3+5);
		}
	}
	);
	
	var res = 0;
	collection_.map(function(i){
		res += i;
	});
	return res;
}
module.exports = hybrid_operation_to_uneven;

