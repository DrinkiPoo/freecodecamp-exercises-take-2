/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  let a = str.length;
  let b = target.length;
  for(let i=0; i<b; i++){
    if (str[a-b+i] != target[i])return false;
  }
  return true;
}

console.log(
confirmEnding("Bastian", "tian")
);
