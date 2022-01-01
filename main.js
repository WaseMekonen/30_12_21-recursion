// 1:

// function recursionSum(sum, num) {
//   if (num > 0) {
//     sum += num % 10;
//     num = parseInt(num / 10);
//     return recursionSum(sum, num);
//   }
//   return sum;
// }

// console.log(recursionSum(0, 233));

// 2:

// function recursiveMinArrNum(arr, current, min) {
//   if (arr.length) {
//     // console.log(min);
//     if (arr[1] < min) {

//     }

//     // return recursiveMinArrNum(arr,current,min);
//   }
//   return min;
// }

// let classGrades = [13, -9, 19, -20];

// console.log(recursiveMinArrNum(classGrades, 0, classGrades[0]));

// 3:

function userInputArray(count, arr) {
  if (count < 3) {
    const userInput = Number(prompt("Insert a number"));
    if (userInput !== " " && userInput !== 0 && userInput === Number && userInput !== NaN) {
      arr.push(userInput);
      count++;
    }
    return userInputArray(count, arr);
  }
  return arr;
}

const arr = [];
console.log(userInputArray(0, arr));
