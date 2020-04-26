var intervalIntersection = function(A, B) {
    let result = []
    let collect = []
    for (let i = 0; i < A.length; i++)  {
        let com = []
        for (let j = A[i][0]; j <= A[i][A[i].length - 1]; j++)  {
            com.push(j)
        }
        //Now have each interval
        collect.push(com)

        for (let k = 0; k < B.length; k++)  {
            let int = []        
            for (let l = B[k][0]; l <= B[k][B[k].length - 1]; l++)   {
                console.log('l',l)
                for ( let m = 0; m < collect.length; m++)   {
                    if (collect[m].includes(B[k][l]))    {
                        int.push(B[k][l])
                        console.log('int',int)
                    }
                    result.push(int)
                }
            }
        }
        
    }
    return result

};






var intervalIntersection = function(A, B) {
    //     let result = []
    //     let collect = []
    //     for (let i = 0; i < A.length; i++)  {
    //         let com = []
    //         for (let j = A[i][0]; j <= A[i][A[i].length - 1]; j++)  {
    //             com.push(j)
    //         }
    //         //Now have each interval
    //         collect.push(com)
    //     }
    
    //         for (let k = 0; k < B.length; k++)  {
    //             for (let l = B[k][0]; l <= B[k][B[k].length - 1]; l++)   {
    //                 for ( let m = 0; m < collect.length; m++)   {
    //                     if (collect[m].includes(l))    {
                        
    //                     result.push(l)
    //                     }
    //                 }
    //             }
    //         }
            
        
    let result = [1,2,5,8,9,10,15,16,17,18,19,20,21,22,23,24,25]
    let container = []
    let section = []
    
    for (let i = 0; i < result.length - 1; i++) {
        if (result[i + 1] == result[i] + 1) {
            section.push(result[i])
        }   else    {
            result.push(section)
            section = []
        }
    }
        console.log(container)
    }
    ;

    var intervalIntersection = function(A, B) {
        let result = []
        let collect = []
        for (let i = 0; i < A.length; i++)  {
            let com = []
            for (let j = A[i][0]; j <= A[i][A[i].length - 1]; j++)  {
                com.push(j)
            }
            //Now have each interval
            collect.push(com)
        }
    
            for (let k = 0; k < B.length; k++)  {
                for (let l = B[k][0]; l <= B[k][B[k].length - 1]; l++)   {
                    for ( let m = 0; m < collect.length; m++)   {
                        if (collect[m].includes(l))    {
                        
                        result.push(l)
                        }
                    }
                }
            }
            
        
    let container = []
    let section = []
    
    for (let i = 0; i < result.length; i++) {
        section.push(result[i])
        if (result[i + 1] !== result[i] + 1) {
            container.push(section)
            section = []
        }
    }
        console.log(container)
    }
    ;

    if (a[0] > b[0] && a[1] > b[1])   {
        int[0] = a[0]
        int[i] = b[1]
        
    }   else    if (a[0] > b[0] && a[1] < b[1]) {
            int = a
    }   else if (a[0] > b[0])    {
            int[0] = a[0]
            int[1] = b[1]
    }   else    if (a[1] < b[1])    {
            int[0] = b[0]
            int[1] = b[1]
    }   else   if (a[0] === b[1])  {
        int[0] = a[0]
        int[1] = b[1]
    }