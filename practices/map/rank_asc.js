'use strict';
var rank_asc = function(collection){
	var res = collection.sort().reverse();
	return res;
};
console.log(rank_asc([3, 2, 4, 5, 6]));
module.exports = rank_asc;
