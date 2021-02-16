/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  let temp = [];
  for(let x of arr){
    if (x) temp.push(x);
  }
  return temp;
}

console.log(
bouncer([7, "ate", "", false, 9])
);
