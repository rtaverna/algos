var isMonotonic = function(A) {
    let inc = true
    let dec = true
    for (let i = 0; i < A.length; i++)  {
        if (A[i] < A[i+1]) {
            dec = false
        }
    }    
    for (let i = 0; i < A.length; i++)  {
        if (A[i] > A[i+1]) {
            inc = false
        }
    }
    return inc || dec
};