'use strict';

function spilt_to_zero(number, interval) {
	var NUMBER = 10*number;
	var INTERVAL = 10*interval;
	var res = [];
	for(var i = 0;i < (NUMBER / INTERVAL + 1);i++){
			res.push(NUMBER - i*INTERVAL);
		}
	return res.map(function(x){
		return x/10;
	});
}
module.exports = spilt_to_zero;
