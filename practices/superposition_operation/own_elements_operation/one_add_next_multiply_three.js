'use strict';
function one_add_next_multiply_three(collection){
	var res = collection.map(function(val,index){
		if(index === collection.length){
			return null;
		}
		return (val+collection[index+1])*3;
	});
	res.pop();
	return res;
}
module.exports = one_add_next_multiply_three;
