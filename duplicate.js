//217 
nums = [1,2,3,1]
function dupli (nums) {
    const s = new Set(nums)
    return s.size !== nums.length
};

console.log(dupli(nums))