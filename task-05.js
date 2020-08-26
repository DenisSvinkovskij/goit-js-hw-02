function checkForSpam(str) {
  'use strict';
  // Write code under this line
  const normalStr = str.toLowerCase();
  if (normalStr.includes('sale') || normalStr.includes('spam')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
