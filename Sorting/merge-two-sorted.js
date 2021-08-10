const merge = (nums1, m, nums2, n) => {
  //Loop Backwards Through Array
  for (let i = nums2.length - 1; i >= 0; i--) {
    //Move items from arr num2 to front of num1
    nums1.unshift(nums2[i]);
    //remove last element in nums1
    nums1.pop();
  }
  //sort in ascending order
  nums1.sort((a, b) => a - b);
};
