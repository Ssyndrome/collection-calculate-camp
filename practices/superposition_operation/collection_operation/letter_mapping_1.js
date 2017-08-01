'use strict';

function even_to_letter(collection) {
	var res = [];
	collection.forEach(function(val){
		if(val % 2 === 0){
			res.push(String.fromCharCode(val + 96));
		}
	});
	return res;
}
module.exports = even_to_letter;
