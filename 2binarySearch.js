function binarySearch(arr, val){
  console.log("make sure the array is sorted")
  var first = 0
  var length = arr.length
  var last = length-1
  var mid = Math.floor((first+last)/2)
  if(arr[first] == val){
    return "Element found at index" + " " + first
  }
  if(arr[last] == val){
    return "Element found at index" + " " + last
  }
  if(arr[mid] == val){
      return "Element found at index" + " " + mid
    }
  while(last-first>=2){
    if(val>arr[mid]){
      first   = mid
      mid = Math.floor((first+last)/2)
      console.log(first,mid,last)
      if(arr[mid] == val){
        return "Element found at postition " + mid
      }
    }
    else if(val<arr[mid]){
      
      last = mid
      mid = Math.floor((first+last)/2)
      console.log(first,mid,last)
      if(arr[mid] == val){
        return "Element found at postition " + mid
      }
    }
  }
  return "Element not in array"
}


console.log(binarySearch([5,6,7,8,9,10,15,20],1521));