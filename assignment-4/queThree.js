var transpose = function(A) {
    let result =[];
    let row = A.length;
    let col = A[0].length;
    for(let i=0; i< row; i++){
        for(let j =0; j<col; j++){
            if(!result[j]){
                result[j] = [];
            } 
            result[j][i] = A[i][j];
        }
    }
    return result;
};