'use strict';

function get_letter_interval_2(number_a, number_b) {
	var result = [];
	if(number_a>number_b){
		for(var i = 0,a_b = number_a - number_b + 1;i<a_b;i++){
			result.push(get_string(number_a - i));  
		}
	}else if(number_a<number_b){
		for(var i = 0,b_a = number_b - number_a + 1;i<b_a;i++){
			result.push(get_string(number_a + i));  
		}
	}else{
		result.push(get_string(number_a));
	}
	return result;
}
function get_string(a){
	if(a <= 26){
		return(String.fromCharCode(a+96));
	}else if(a%26 === 0){
		return(String.fromCharCode(parseInt(a/26)+95)+'z');
	}else{
		return(String.fromCharCode(parseInt(a/26)+96)+String.fromCharCode(a%26+96));
	}
}
console.log(get_letter_interval_2(20, 53));
module.exports = get_letter_interval_2;

