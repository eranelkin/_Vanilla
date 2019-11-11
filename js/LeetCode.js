// /*
// const romanToInt = function (s) {
//   let total = 0;
//   let mapLetters = new Map();

//   mapLetters.set("I", 1);
//   mapLetters.set("V", 5);
//   mapLetters.set("X", 10);
//   mapLetters.set("L", 50);
//   mapLetters.set("C", 100);
//   mapLetters.set("D", 500);
//   mapLetters.set("M", 1000);

//   for (let i = 0; i < s.length; i++) {
//     if (i <= s.length - 2 &&
//       mapLetters.get(s.charAt(i)) < mapLetters.get(s.charAt(i + 1))) {
//       total -= mapLetters.get(s.charAt(i));
//     } else {
//       total += mapLetters.get(s.charAt(i));
//     }
//   }
//   return total;
// };

// // console.log(romanToInt("III"));
// // console.log(romanToInt("IV"));
// console.log(romanToInt("MCMXCIV"));
// */

// /*
// var longestCommonPrefix = function (arr) {
//   if (arr.length == 0) return "";
//   let prefix = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     while (arr[i].indexOf(prefix) !== 0) {
//       prefix = prefix.substring(0, prefix.length - 1);
//       if (prefix === '') return "";
//     }
//   }
//   return prefix;
// }

// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// */
// /*
// var isValid = function (str) {
//   if (str.length % 2 !== 0 || ')}]'.indexOf(str.charAt(0)) === 0) return false;
//   if (str === '') return true;
//   let isContinue = true;

//   while (str !== '' && isContinue) {
//     const orig = str;

//     str = str.replace('()', '').replace('{}', '').replace('[]', '');
//     if (str === '') return true
//     isContinue = str !== orig;
//   }
//   return false;
// }

// console.log(isValid('({[]})'));
// console.log(isValid('(){[]})'));
// console.log(isValid('(){}{[]}'));
// */
// // function removeDuplicates(nums) {
// //   const my = nums.reduce((acc, next) => {
// //     if (acc.indexOf(next) === -1) {
// //       return [...acc, next];
// //     } else {
// //       return acc;
// //     }
// //   }, []);
// //   return my.length;
// // }
// // console.log(removeDuplicates([1, 1, 2, 2, 3, 3]))

// var addBinary = function (a, b) {
//   const maxLength = Math.max(a.length, b.length);
//   let res = '';
//   let needIncrease = false;

//   for (let i = maxLength - 1; i >= 0; i--) {
//     if (a.charAt(i) === '1' && b.charAt(i) === '1') {
//       res = '0' + res;
//       needIncrease = true;
//     } else {
//       if (needIncrease) {
//         if (a.charAt(i) === '1' || b.charAt(i) === '1') {
//           res = '0' + res;
//         } else {
//           res = '1' + res;
//           needIncrease = false;
//         }
//       } else {
//         if (a.charAt(i) === '1' || b.charAt(i) === '1') {
//           res = '1' + res;
//         } else {
//           res = '0' + res;
//         }
//       }
//     }
//   }
//   if (needIncrease) res = '1' + res;
//   return res;
// };

// console.log(addBinary('11', '1'));