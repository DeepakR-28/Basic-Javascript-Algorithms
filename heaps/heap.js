class maxHeap{
  constructor(){
    this.values = []
  }
  insert(val){
    this.values.push(val)
    var startIndex = this.values.length-1
    var parentIndex = Math.floor((startIndex-1)/2)
    while(this.values[startIndex]>this.values[parentIndex]){
      var temp = this.values[startIndex]
      this.values[startIndex] = this.values[parentIndex]
      this.values[parentIndex] = temp
      startIndex = parentIndex
      parentIndex = Math.floor((startIndex-1)/2)
    }
    return this
  }
  maxExtract(){
    var list = this.values
    var last = list.length-1
    list.shift()
    list.unshift(list[last-1])
    last = 0
    list.pop()
    var n = 0
    var leftChild = 2*n + 1
    var rightChild = 2*n + 2
    while(list[last] < list[leftChild] || list[last] < list[rightChild]){
      if(list[leftChild] > list[rightChild]){
        var temp = list[leftChild]
        list[leftChild] = list[last]
        list[last] = temp
        n = leftChild
        last = leftChild
        leftChild = 2*n + 1
        rightChild = 2*n + 2
        console.log(last,n, leftChild, rightChild)
      }
      else if(list[rightChild] > list[leftChild]){
        var temp = list[leftChild]
        list[leftChild] = list[last]
        list[last] = temp
        n = rightChild
        last = rightChild
        leftChild = 2*n + 1
        rightChild = 2*n + 2
        
      }
    }
    return this
  }
}

var heap = new maxHeap()

heap.insert(41)
heap.insert(39)
heap.insert(27)
heap.insert(12)
heap.insert(33)
heap.insert(18)
heap.insert(28)
heap.insert(40)
heap.insert(55)
heap.maxExtract();
heap.maxExtract();
console.log(heap)