/*

*/

function chunkArrayInGroups(arr, size) {
  let final = [];
while(arr.length >= size){
final.push(arr.splice(0,size));
}
if(arr.length > 0) final.push(arr);

return final;
}



console.log(
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
);
