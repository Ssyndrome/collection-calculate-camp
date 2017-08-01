'use strict';

function average_to_letter(collection) {
	var sum = 0;
	collection.map(function(i){
		sum += i;
	});
	return String.fromCharCode(parseInt(sum/collection.length)+97);
}
module.exports = average_to_letter;

