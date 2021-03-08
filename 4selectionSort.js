function selectionSort(arr){
  var index;
  for(var i = 0;i < arr.length;i++){
    var curr = i
    var minimum = arr[i]
    for(var j = i+1;j < arr.length;j++){
      if(arr[j]<minimum){
        minimum = arr[j]
        index = j
        var temp = arr[curr]
        arr[curr] = arr[index]
        arr[index] = temp
      }
    }
  }
  console.log(arr)
}

console.log(selectionSort([1,23,123,12,31,23,1,23,1,23]));