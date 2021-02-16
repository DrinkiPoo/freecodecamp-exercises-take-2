/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  if (num >= str.length) return str;

  let temp = "";
  for(let i=0; i<num; i++){
    temp += str[i];
  }
  return temp+"...";
}

console.log(
truncateString("A-tisket a-tasket A green and yellow basket", 8)
);
