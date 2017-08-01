'use strict';

function choose_common_elements(collection_a, collection_b) {
	var res = [];
	collection_a.forEach(function(val_a){
		collection_b.forEach(function(val_b){
			if(val_a === val_b){
				res.push(val_a);
			}
		});
	});
	return res;
}

module.exports = choose_common_elements;
