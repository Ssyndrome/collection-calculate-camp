function collect_same_elements(collection_a, collection_b) {
    var res = [];
    collection_a.forEach(function(a){
        collection_b.forEach(function(b){
            if(a === b){
                res.push(a);
            }
        });
    });
    return res;
}

module.exports = collect_same_elements;
