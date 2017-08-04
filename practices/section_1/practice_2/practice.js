function collect_same_elements(collection_a, collection_b) {
    var res = [];
    var collection_b_ = collection_b[0];
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
