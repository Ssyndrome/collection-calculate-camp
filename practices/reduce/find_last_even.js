'use strict';

function find_last_even(collection) {
	var res = [];
	for(var i = 0;i<collection.length;i++){
		if(collection[i]%2 === 0){
			res.push(collection[i]);
		}
	}
	return res[res.length-1];
}
module.exports = find_last_even;
