'use strict';

function compute_chain_median(chain) {
	var res = chain.split('->').map(function(i){return Number(i);}).sort(function(a,b){
		if(a>b){
			return 1;
		}else if(a<b){
			return -1;
		}else{
			return 0;
		}
	});
	return (res[res.length/ 2]+res[ res.length / 2 -  1])/2;
}
module.exports = compute_chain_median;
