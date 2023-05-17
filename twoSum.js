const nums = [2,7,11,15]
const target = 9

const twoSum = (nums, target) => {
    let map = {}
    for (let i=0; i <= nums.length; i++) {
        let req = target - nums[i]
        if (req in map) {
            return [map[req], i]
        }
        map[nums[i]] = i
    }
}

console.log(twoSum(nums,target))