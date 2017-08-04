'use strict';

function get_integer_interval(a, b) {
	var result = [];
	if(a>b){
		for(let i = 0,a_b = a - b + 1;i<a_b;i++){
			result.push(a - i);  
		}
	}else if(a<b){
		for(let j = 0,b_a = b - a + 1;j<b_a;j++){
			result.push(a + j);  
		}
	}else{
		result.push(a);
	}
	return result;
}
module.exports = get_integer_interval;