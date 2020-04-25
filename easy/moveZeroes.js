/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroes = 0
    let ans = []
    for (let i = 0; i < nums.length; i++)   {
        if (nums[i] === 0)  {
            zeroes++
        }   else    {
            ans.push(nums[i])
        }
    }
    for (let i = 0; i < ans.length; i++)    {
        nums[i] = ans[i]
    }
    console.log('nums',nums)
    console.log('ans',ans)
    for (let i = ans.length; i < ans.length + zeroes; i++)   {
        nums[i] = 0
    }
    return nums
    
};