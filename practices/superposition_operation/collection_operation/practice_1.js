'use strict';

function hybrid_operation(collection) {
	var res = 0;
	collection.map(function(i){
		res += i*3+2
	}); 
	return res;
}
module.exports = hybrid_operation;

