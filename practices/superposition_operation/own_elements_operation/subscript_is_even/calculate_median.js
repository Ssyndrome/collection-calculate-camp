'use strict';
var calculate_median = function(collection){
	var collection_ = collection.filter(function(i){
		return i%2 === 0;
	});
	if(collection_.length%2 === 0){
		return (collection_[collection_.length/2-1]+collection_[collection_.length/2])/2;
	}else{
		return collection_[parseInt(collection_.length/2)];
	}
};
module.exports = calculate_median;
