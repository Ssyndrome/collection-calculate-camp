'use strict';

function collect_max_number(collection) {
	return collection.sort().reverse()[0];
}

module.exports = collect_max_number;
