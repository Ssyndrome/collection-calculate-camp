'use strict';

function get_letter_interval(number_a, number_b) {
	var result = [];
	if(number_a>number_b){
		for(var i = 0,a_b = number_a - number_b + 1;i<a_b;i++){
			result.push(String.fromCharCode(number_a - i+96));  
		}
	}else if(number_a<number_b){
		for(var i = 0,b_a = number_b - number_a + 1;i<b_a;i++){
			result.push(String.fromCharCode(number_a + i+96));  
		}
	}else{
		result.push(String.fromCharCode(number_a+96));
	}
	return result;
}

module.exports = get_letter_interval;
