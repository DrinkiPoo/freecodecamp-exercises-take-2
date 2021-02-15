/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
  let temp = "";
  let x;
  (num < 1) ? x = 0 : x = num;

  for (let i = 0; i < x; i++){
    temp += str;
  } 
  
  return temp;
}

console.log(
repeatStringNumTimes("abc", 3)
);
