'use strict';

function hybrid_operation_to_uneven(collection) {
	var collection_ = [];
	collection.forEach(function(val){
		if(val%2 !== 0){
			collection_.push(val*3+2);
		}
	}
	);
	return collection_;
}
module.exports = hybrid_operation_to_uneven;

