var intersect = function (nums1, nums2) {
  let shortest;
  let longest;
  if (nums1.length > nums2.length) {
    longest = nums1;
    shortest = nums2;
  } else {
    longest = nums2;
    shortest = nums1;
  }

  let hash = {};
  for (let num of longest) {
    if (!hash[num]) hash[num] = 0;
    hash[num] += 1;
  }
  let result = [];
  for (const num of shortest) {
    if (hash[num] && hash[num] > 0) {
      result.push(num);
      hash[num] -= 1;
    }
  }

  return result;
};
