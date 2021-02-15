/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  let arr = str.split(" ");
  let count = 0;

  for(let x of arr){
	  if (x.length > count) count = x.length;
  }
	return count;
}

console.log(
findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
