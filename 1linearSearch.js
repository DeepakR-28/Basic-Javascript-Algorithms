function linearSearch(arr, val){
  for(var i = 0;i<=arr.length;i++){
    if(arr[i] == val){
      return "Element found at index" + " " + i
    }
  }
  return "Element not found"
}

console.log(linearSearch([1,2,3,4,5,6,7,8],10))