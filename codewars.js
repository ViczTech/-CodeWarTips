// QUESTION 
// Now you have to write a function that takes an argument and returns the square of it.
// ANSWER
// Write the "square"-function here
// const square = function(num){
//   return(num * num);
// }  

// square()


// QUESTION
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// ANSWER
function grow(x) {
  return x.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}
