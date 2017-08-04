function create_updated_collection(collectionA, objectB) {
    	for(var a = 0;a<collectionA.length;a++){
		for(var b = 0;b < objectB.value.length;b++){
			if(collectionA[a].key == objectB.value[b]){
				collectionA[a].count --;
			}
		}
	}
	return collectionA;
}

module.exports = create_updated_collection;
