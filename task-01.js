const getItemsString = function (array) {
  'use strict';
  // Write code under this line
  let result = '';
  let num = 0;
  for (let i = 0; i < array.length; i += 1) {
    num = i + 1;
    result += `${num} - ${array[i]}\n`;
    if (i < array.length - 1) {
      continue;
    }
  }
  return result;
  // let result = '';
  // let workres = array.join(' ');
  // for (let i = 0; i < workres.length; i += 1) {
  //   result += `${i + 1} - workres[i].split(',')`;
  // }
};

console.log(
  getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']),
);
