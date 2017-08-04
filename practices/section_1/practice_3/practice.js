function collect_same_elements(collection_a, object_b) {
    var res = [];
    var collection_b_ = object_b.value;
    collection_a.forEach(function(a){
        collection_b_.forEach(function(b){
            if(a === b){
                res.push(a);
            }
        });
    });
    return res;
}

module.exports = collect_same_elements;
