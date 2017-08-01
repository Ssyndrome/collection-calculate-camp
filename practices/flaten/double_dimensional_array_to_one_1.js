'use strict';

function double_to_one(arr) {
	var arr1 = (arr + '').split(',');//将数组转字符串后再以逗号分隔转为数组
        var arr2 = arr1.map(function(x){
            return Number(x);
        });
        return arr2;
}
module.exports = double_to_one;
