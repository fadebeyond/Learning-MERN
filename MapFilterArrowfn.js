// function sum(a, b) {
//   return a + b;
// }
// var ans = sum(1, 2);

// //Writing this using arrowFuncs :
// const ans1 = (a, b) => {
//   return a + b;
// };
// ans = ans1(1, 2);
// console.log(ans);
// console.log(ans1);

//Ques: Given an array give back array in which every value is multiplied by 2
const input = [1, 2, 3, 4, 5];
var newArray = [];
//Solution of AAM ZINDAGI

for (let i = 0; i < input.length; i++) {
  newArray.push(input[i] * 2);
}
console.log(newArray);
//Solution of Mentos Zindagi

function transform(i) {
  return i * 2;
}
newArray = input.map(transform);
console.log(newArray);
//Solution of mentos Zindagi part 2
newArray = input.map((i) => {
  return i * 2;
});
console.log(newArray);

//Ques given an input array return a new array with just even values from input array
// const input = [1, 2, 3, 4, 5];
var newArray = [];
//AAM Zindagi
for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 == 0) {
    newArray.push(input[i]);
  }
}
console.log(newArray);
newArray = input.filter((i) => {
  return i % 2 == 0;
});
console.log(newArray);
