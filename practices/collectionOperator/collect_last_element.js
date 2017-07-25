'use strict';

function collect_last_element(collection) {
  var a  = collection.length;
  return collection[a-1];
}

module.exports = collect_last_element;
