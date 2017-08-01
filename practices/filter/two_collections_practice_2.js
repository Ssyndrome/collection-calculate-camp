'use strict';

function choose_no_common_elements(collection_a, collection_b) {
	var res = [];
	var c = 0;
	collection_a.forEach(function(val_a){
		c = 0;
		collection_b.forEach(function(val_b){
			if(val_a === val_b){
				c = 1;
			}
		});
		if(c !==1){
			res.push(val_a);
		}
	});
	return res;
}

module.exports = choose_no_common_elements;
