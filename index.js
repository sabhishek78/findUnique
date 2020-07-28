// There is an array with some numbers. All numbers are equal except for one. Try to find it!
function findUniq(arr) {
  let map = new Map();
  for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
      let val=map.get(arr[i]);
      val++;
      map.set(arr[i],val);
    }
    else{
      map.set(arr[i],1);
    }
  }
 return getByValue(map,1);
}
function getByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));