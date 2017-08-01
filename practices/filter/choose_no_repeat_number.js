'use strict';

function choose_no_repeat_number(collection) {
	var res = [collection[0]];
	collection.forEach(function(val){
		if(val !== res[res.length - 1]){
			res.push(val);
		}
	});
	return res;
}
module.exports = choose_no_repeat_number;
