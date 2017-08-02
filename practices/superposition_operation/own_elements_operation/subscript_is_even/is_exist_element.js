'use strict';
var is_exist_element = function(collection,element){
	var res = collection.filter(function(val,index){
		return (index%2 === 0 && val === element);
	});
	if(res.length === 0){
		return false;
	}else{
		return true;
	} 
};
module.exports = is_exist_element;
