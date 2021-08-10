var singleNumber = function(nums) {
  let a = 0;
  for (const value of nums) {
    a ^= value
  }
  
  return a;
};

// Bit Manipulation: a⊕b⊕a=(a⊕a)⊕b=0⊕b=b