var canPlaceFlowers = function(flowerbed, n) {
    let count = 0 
    let j = 0
    while(j < flowerbed.length) {
        const flower = flowerbed[j]
        if(flowerbed[j] === 0  // current 
           && (j == 0 || flowerbed[j - 1] == 0) // prev 
           && (j === flowerbed.length-1 || flowerbed[j + 1] == 0)) { // next 
              flowerbed[j++] = 1 
              count++  
         } 
         if(count >= n) {   
             return true 
         }
         j = j+1
     }
     return false 
 };