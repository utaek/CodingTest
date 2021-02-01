/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        let first = target - nums[i];
        let second = nums.indexOf(first);
        
        if(second != -1 && i != second){
            return [i, second];
        }
    }
}