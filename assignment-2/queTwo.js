var distributeCandies = function(candyType) {
    const set = new Set();
    for(const type of candyType) {
        set.add(type)
    }
    return Math.min(set.size, candyType.length / 2)
};