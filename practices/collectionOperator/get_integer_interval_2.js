'use strict';

function get_integer_interval_2(number_a, number_b) {
	var result = [];
	if(number_a>number_b){
		for(var i = 0,a_b = number_a - number_b + 1;i<a_b;i++){
			if((number_a - i)%2 ===0){
				result.push(number_a - i);  
			}
		}
	}else if(number_a<number_b){
		for(var i = 0,b_a = number_b - number_a + 1;i<b_a;i++){
			if((number_a + i)%2 ===0){
				result.push(number_a + i);  
			}
		}
	}else{
		if(number_a%2 ===0){ 
		result.push(number_a);
		}
	}
	return result;
}

module.exports = get_integer_interval_2;
