'use strict';

function median_to_letter(collection) {
	if(collection.length % 2 === 0){
		var median = Math.round((collection[collection.length/2-1]+collection[collection.length/2])/2);
	}else{
		var median = collection[collection.length/2-1];
	}
	if(median%26 === 0){
		return String.fromCharCode(median/26+95)+'z';
	}else{
		return String.fromCharCode(median/26+96)+String.fromCharCode(median%26+96);
	}
}
module.exports = median_to_letter;
