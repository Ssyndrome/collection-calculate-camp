'use strict';

function average_uneven(collection) {
	var res = 0;
	var c = 0;
	collection.forEach(function(val){
		if(val%2 !== 0){
			res += val;
			c++;
		}
	});
	return res/c;
}
module.exports = average_uneven;
