'use strict';
var calculate_average = function(collection){
	var a = 0;
	var b = 0;
	var c = collection.map(function(i){
		if(i%2 === 0){
		a += i;
		b++;
		}
	});
	return a/b;
};
module.exports = calculate_average;
