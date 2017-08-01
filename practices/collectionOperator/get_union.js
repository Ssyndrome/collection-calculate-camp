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
var collection_a = [10, 27, 28, 19, 5];
  var collection_b = [5, 78, 28, 19, 23];
  console.log(get_union(collection_a, collection_b));
module.exports = get_union;

