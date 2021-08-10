var containsDuplicate = function(nums) {
  let res = false;
  let hash = {};
  
  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] === undefined) {
        hash[nums[i]] = 1
      } else {
        res = true;
        break;
      }
  }

  return res;
};