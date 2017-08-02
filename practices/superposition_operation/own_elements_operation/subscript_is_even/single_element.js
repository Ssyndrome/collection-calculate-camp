'use strict';
var single_element = function(collection){
	var res = collection.filter(function(val,index){
		return index%2 !== 0 ;
	});
	var i = res.length,b,j;
	while(i--){
		j = i;
		b = false;
		while(j--){
			if(res[i] === res[j]){
				res.splice(j,1);
				i --;
				b = true;
			}
		}
		if(b){
			res.splice(i,1);
		}
	}
	return res;
};
module.exports = single_element;
