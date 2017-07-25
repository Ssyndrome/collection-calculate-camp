'use strict';

function collect_all_even(collection) {
	var NEW = new Array;
	for(var a = 0;a < collection.length;a++){
		if(collection[a] % 2 ==0 ){
		NEW.push(collection[a]);
	  }
  return NEW;
}

module.exports = collect_all_even;
