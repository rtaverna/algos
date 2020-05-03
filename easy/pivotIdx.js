/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let idx = -1
    let leftSum
    let rightSum
    for (let i = 0; i < nums.length; i++)   {
        let left = nums.slice(0,i)
        let right = nums.slice(i+1)
        if (left.length !== 0 && right.length !== 0 )   {
            if (left.reduce((acc,x) => acc + x) === right.reduce((acc,x) => acc + x))   {
                idx = i
                break
            
            } 
        }  else    if  (left.length === 0)   {
            if (right.reduce((acc,x) => acc + x) == 0) {
                idx = i
                break
            }
        }   else    if  (right.length === 0)   {
            if (left.reduce((acc,x) => acc + x) == 0) {
                idx = i
                break
            }
    }
    }
        return idx
    }
