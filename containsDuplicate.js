//https://leetcode.com/problems/contains-duplicate/description/
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = (nums) => {
    let findDuplicate;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]){
                findDuplicate =  true
            }
            
        }
 
    }
    if (!findDuplicate) {
        return false
    }
    return findDuplicate
}
console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4] ));
console.log(containsDuplicate( [1,1,1,3,3,4,3,2,4,2]));
