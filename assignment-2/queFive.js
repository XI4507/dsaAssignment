var maximumProduct = function(nums) {
	let len = nums.length;
	let maxProduct = 1;
		if(len===0) return 0;
		if(len<=3) {
			for(var i=0; i<len; i++){
				 maxProduct *= nums[i];
			}
			return maxProduct;
		}
		var max = Number.MIN_SAFE_INTEGER,
			max2 = Number.MIN_SAFE_INTEGER,
			max3 = Number.MIN_SAFE_INTEGER,
			min = Number.MAX_SAFE_INTEGER,
			min2 = Number.MAX_SAFE_INTEGER;
	for(let i=0; i<len; i++){ 
		if(nums[i]>=max){
				max3 = max2;
				max2 = max;
				max = nums[i];
		} else if(nums[i]>max2) {
				max3 = max2;
				max2 = nums[i];
		} else if(nums[i]>max3) {
				max3 = nums[i];
		}
		if(nums[i]<min) {
				min2 = min;
				min = nums[i];
		} else if(nums[i]<min2){
				min2 = nums[i];
		}
	}
							
	return Math.max(max*max2*max3, max*min*min2);
};