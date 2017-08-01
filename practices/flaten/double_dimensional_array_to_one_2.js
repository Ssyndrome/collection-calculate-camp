'use strict';

function double_to_one(collection) {
	var unique = (collection + '').split(',');
	var unique_ = unique.map(function(x){
		return Number(x);
	});
	var c = 0;
	var res = [unique_[0]];
	unique_.forEach(function(val){
		c = 0;
		res.forEach(function(val_r){
			if(val_r === val){
				c = 1;
			}
		});
		if(c === 0){
			res.push(val);
		}
	});
	return res;
}

module.exports = double_to_one;
