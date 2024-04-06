function findTriplets(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) { // Skip duplicates
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === target) {
                    triplets.push([nums[i], nums[left], nums[right]]);
                    // Skip duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return triplets;
}

// Test the function
const nums = [-1, 0, 1, 2, -1, -4];
const target = 0;
console.log(findTriplets(nums, target)); // Output: [[-1, -1, 2], [-1, 0, 1]]
