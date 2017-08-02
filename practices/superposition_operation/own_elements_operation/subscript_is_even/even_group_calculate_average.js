'use strict';
var even_group_calculate_average = function(collection){
	var collection_ = collection.filter(function(val,index){
		return index%2 !== 0 && val%2 === 0;
	});
	if(collection_.length === 0){
		return [0];
	}else{
		var collection_3 = collection_.filter(function(val){return val/100 >= 1;});
		var collection_2 = collection_.filter(function(val){return val/100 < 1 && val/10 >= 1;});
		var collection_1 = collection_.filter(function(val){return val/10 < 1 ;});
	}
	var res = [];
	if(collection_1.length !== 0){var sum_1 = 0;collection_1.map(function(val){sum_1 += val;});res.push(sum_1/collection_1.length);}
	if(collection_2.length !== 0){var sum_2 = 0;collection_2.map(function(val){sum_2 += val;});res.push(sum_2/collection_2.length);}
	if(collection_3.length !== 0){var sum_3 = 0;collection_3.map(function(val){sum_3 += val;});res.push(sum_3/collection_3.length);}
	return res;
};
module.exports = even_group_calculate_average;
