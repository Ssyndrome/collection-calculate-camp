'use strict';
var even_asc_odd_desc = function(collection){
	var res_even = collection.filter(function(i){
		return i%2 === 0;
	}).sort(function(a,b){
		if(a>b){
			return 1;
		}else if(a<b){
			return -1;
		}else{
			return 0;
		}
	});
	var res_odd = collection.filter(function(i){
		return i%2 !== 0;
	}).sort(function(a,b){
		if(a>b){
			return 1;
		}else if(a<b){
			return -1;
		}else{
			return 0;
		}
	}).reverse();
	var res = [];
	res_even.forEach(function(m){res.push(m);});
	res_odd.forEach(function(n){res.push(n);});
	return res;
};
module.exports = even_asc_odd_desc;
