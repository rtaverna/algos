//optimized:
var maxSubArray = function(nums) {
    let result = 0;
    if (checkAllPositive(nums)) {
        result = nums.reduce( (a, b) => a + b, 0 );
        return result;
    }  else if (checkAllnegative(nums))  {
        result = Math.max(...nums);
        return result;
    }  else  {
    let tempMax = nums[0]; 
    let globalMax = tempMax;
    for (let i = 1; i<nums.length; i++)  {
        if (nums[i] > nums[i] + tempMax)  {  
            // assume we start from a neg num, if current + prev tempMax is less than current
            tempMax = nums[i];      //  we start fresh
            if (tempMax>globalMax)  {
                globalMax = tempMax;
            }
        }  else  {   
            // if the previous sum of the element doesn't negate it completely, we keep adding
            tempMax = nums[i] + tempMax;
            if (tempMax>globalMax)  {
                globalMax = tempMax;
            }
        }
    }
    return globalMax;
    }


};

function checkAllPositive(nums)  {
    return nums.filter( (ele) => ele > 0 ).length === nums.length;
}
function checkAllnegative(nums)  {
    return nums.filter( (ele) => ele < 0 ).length === nums.length;
}
