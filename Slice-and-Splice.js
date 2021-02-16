/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  //trying to not use splice()

  let temp = [];

  for (let i=0; i<n; i++){
    temp.push(arr2[i]);
  }
  temp = [...temp, ...arr1];

  for (let i=n; i<arr2.length; i++){
    temp.push(arr2[i]);
  }
  return temp;
}

console.log(
frankenSplice([1, 2, 3], [4, 5, 6], 1)
);
