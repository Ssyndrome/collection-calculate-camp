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
module.exports = grouping_count;
