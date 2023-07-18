var arrangeCoins = function(nc) {
    let final=2 * nc + 0.25;
    final=Math.sqrt(final);
    final=final-0.5;
    final=Math.floor(final);
    return final;
};