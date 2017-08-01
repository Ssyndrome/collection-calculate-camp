'use strict';

function get_intersection(collection_a, collection_b) {
	var result =[];
	for(var i = 0,al = collection_a.length;i < al;i++){
		for(var j = 0,bl = collection_b.length;j < bl;j++){
			if(collection_a[i] === collection_b[j]){
				result.push(collection_a[i]);
			}
		}
	}
	var result_ = result.sort(function(a,b){
		if(a>b){
			return 1;
		}else if(a<b){
			return -1;
		}else{
			return 0;
		}
	});
	return result_;
}
module.exports = get_intersection;
