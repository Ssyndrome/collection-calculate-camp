'use strict';

function calculate_elements_sum(collection, element) {
	var res = [];
	for(var i = 0;i < collection.length;i++){
		if(collection[i] === element){
			res.push(i);
		}
	}
	return res[res.length-1];
}
module.exports = calculate_elements_sum;
