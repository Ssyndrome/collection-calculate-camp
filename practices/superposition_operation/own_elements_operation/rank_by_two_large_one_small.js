'use strict';
function rank_by_two_large_one_small(collection){
	collection.sort(function(a,b){
		if(a>b){return 1;}
		else if(a<b){return -1;}
		else{return 0;}
	});
	var res = [];
	var cl = cl = parseInt(collection.length/3);
	while(cl--){
		res.push([collection[0],collection[1],collection[2]]);
		collection.splice(0,3);
	}
	res.map(function(val){
		val.splice(3,0,val[0]);
		val.splice(0,1);
	});
	res.push(collection);
	return (res + '').split(',').map(function(x){return Number(x);});
}
module.exports = rank_by_two_large_one_small;
