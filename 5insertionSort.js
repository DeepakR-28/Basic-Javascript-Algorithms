function insertionSort(arr){
  for(var i = 1 ; i<arr.length; i++){
    var current_index = i
    var current_element = arr[i]
    while(1){
      if(arr[i-1]>arr[current_index]){
        i = i - 1
      }
      else{
        break
      }
      if(i == 0){
        break
      }
    }
    arr.splice(current_index,1)
    console.log(arr)
    arr.splice(i,0,current_element)
  }
   console.log(arr)
}
insertionSort([5,4,3,2,1]);