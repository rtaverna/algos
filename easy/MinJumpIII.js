// function canReach(arr, start) {
//     if (arr[start] === 0)   {
//         return true
//     }   else    {
//         let max = start + arr[start]
//         let min = start - arr[start]
//         if (arr[max] === 0 || arr[min] === 0)   {
//             return true
//         }
//         else    {
//             return canReach(arr,min) || canReach(arr,max)
//         }
//     }
    
// };

// var canReach = function(arr, start) {
//     if (arr[start] === 0)   {
//         return true
//     }   else    {

//         let max = start + arr[start]
//         let min = start - arr[start]
//         if (min >= 0 && max < arr.length)   {
//             return canReach(arr,min) || canReach(arr,max)
//         }   else    {
//                 if (min >= 0 || max < arr.length)   {
//                     let newStart = min >= 0 ? min : max
                    
//                     return canReach(arr,newStart)
//                 }   else    {
//                     return false
//                 }
//         }
//     }
// }
var canReach = function(arr, start) {
    let memo = {}
    for (let i = 0; i < arr.length; i++)    {
        let el = arr[i]
        if (arr[el+arr[i]] < arr.length && arr[el-arr[i]] >= 0) {
            memo[el] = [el+arr[i],el-arr[i]]
            
        }   else if (arr[el+arr[i]] < arr.length)    {
                memo[el] = [el+arr[i]]
            }
          else if  (arr[el-arr[i]] >= 0)  {
            memo[el] = [el-arr[i]]
        }
    }
        return memo
            
            
        }
canReach([3,0,2,1,2],2)

// let memo = {}
// for (let i = 0; i < arr.length; i++)    {
//     let el = arr[i]
//     if (arr[el+arr[i]] < arr.length && arr[el-arr[i]] >= 0) {
//         memo[el] = [el+arr[i],el-arr[i]]
        
//     }   else if (arr[el+arr[i]] < arr.length)    {
//             memo[el] = [el+arr[i]]
//         }
//        else if  (arr[el-arr[i]] >= 0)  {
//         memo[el] = [el-arr[i]]
//     }
// }
// console.log(memo)
//    if (arr[start] === 0)   {
//     return true
// }   else    {

//     let max = start + arr[start]
//     let min = start - arr[start]
    
//     if (min >= 0 && max < arr.length)   {
//         if (memo[arr[start]].includes(min) || memo[arr[start]].includes(max)) {
//         return false
//     }
//         return canReach(arr,min) || canReach(arr,max)
//     }   else    {
//             if (min >= 0 || max < arr.length)   {
//                 let newStart = min >= 0 ? min : max
                
//                 return canReach(arr,newStart)
//             }   else    {
//                 return false
//             }
//     }
// }
const canReach = (arr, start) => {
    return solve(arr, start, {})
  }
  
  const solve = (arr, start, visited = {}) => {
    if (start < 0 || start >= arr.length) {
      return false
    }
  
    if (arr[start] === 0) {
      return true
    }
  
    visited[start] = true
  
    const forward = start + arr[start]
    const back = start - arr[start]
    if (!visited[forward] && solve(arr, forward, visited)) {
      return true
    }
    if (!visited[back] && solve(arr, back, visited)) {
      return true
    }
    return false
  }