'use strict';

function grouping_count(collection) {
	var res = {};
	collection.forEach(function(val){
		if(res[val]){
			res[val]++;
		}else{
			res[val] = 1;
		}
	});
	return res;
}
console.log(grouping_count([1,1,1,1,2,3,1,3,4,2,3,1,3,4,2]));
module.exports = grouping_count;
