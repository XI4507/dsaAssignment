var findLHS = function(N) {
    let fmap = new Map(), ans = 0
    for (let num of N)
        fmap.set(num, (fmap.get(num) || 0) + 1)
    for (let [key,val] of fmap) 
        if (fmap.has(~~key+1))
            ans = Math.max(ans, val + fmap.get(~~key+1))
    return ans
};