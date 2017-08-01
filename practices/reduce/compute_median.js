'use strict';

function compute_median(res) {
	res.sort(function(a,b){
	if(a>b){
		return 1;
	}else if(a<b){
		return -1;
	}else{
		return 0;
	}
	});
	if(res.length % 2 === 0){
		return (res[parseInt(res.length/ 2)]+res[ parseInt(res.length / 2) - 1])/2;
	}else{
		return res[ parseInt(res.length / 2) -  1];
	}
}
module.exports = compute_median;


