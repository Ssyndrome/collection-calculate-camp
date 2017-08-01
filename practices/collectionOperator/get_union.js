'use strict';

function get_union(collection_a, collection_b) {
	var result = collection_a;
	var c = 0;
	for(var i = 0;i<collection_b.length;i++){
		c = 0;
		for(var j = 0;j<collection_a.length;j++){
			if(collection_b[i] === collection_a[j]){
				c = 1;
			}
		}
		if(c !== 1){
			result.push(collection_b[i]);
		}
	}
	return result;
}
module.exports = get_union;

