//no break

/* function bubbleSort(arr){
  for(var i = 0; i<arr.length;i++){
    for(var j = 0;j<arr.length;j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        
      }
    }
  }
return arr

}

console.log(bubbleSort([4,5,6,7,4,2,43,6,7,89,5,3,2,4,6])) */

function bubbleSort(arr){
  for(var i = 0; i<arr.length;i++){
    var swapped = 0
    for(var j = 0;j<arr.length;j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        swapped = 1
      }
      }
      if(swapped == 0){
         return arr
         break
    }
  }
}

console.log(bubbleSort([4,5,6,7,4,2,43,6,7,89,5,3,2,4,6]))