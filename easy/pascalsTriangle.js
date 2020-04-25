var generate = function(numRows) {
    let triangle = []
    if (numRows <= 2)   {
        for (let i = 1; i <= numRows; i++)   {
            let newRow = []
            for (let j = 0; j < i; j++) {
                newRow.push(1)
            }
            triangle.push(newRow)
        }
        return triangle
    }   else    {
            triangle = [[1],[1,1]]
            for (let i = 2; i < numRows; i++)   {
                let newRow = []
                for (let j = 0; j <= i; j++) {
                    if (triangle[i-1][j-1] && triangle[i-1][j]) {
                        console.log(1, triangle)
                        newRow.push(triangle[i-1][j-1] + triangle[i-1][j])
                    }   else if (triangle[i-1][j-1])    {
                        console.log(2)
                            newRow.push(triangle[i-1][j-1])
                    }   else if (triangle[i-1][j])   {
                            console.log(3)
                            newRow.push(triangle[i-1][j])
                            console.log(triangle)
                    }   
                }
                triangle.push(newRow)
                console.log(triangle)
            }   
        return triangle
   
                    
               
}
};