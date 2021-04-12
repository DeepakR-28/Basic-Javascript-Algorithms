class Node{
  constructor(priority,value){
    this.priority = priority
    this.value = value
  }
}

class PriorityQueue{
  constructor(){
    this.values = []
  }

  enqueue(value, priority){
      var newNode = new Node(value,priority)
      newNode.priority = priority
      newNode.value = value
      this.values.push(newNode)
      var startIndex = this.values.length-1
      var start = this.values[startIndex]
      var parentIndex = Math.floor(startIndex-1)/2
      var parent = this.values[parent]
      while(start.priority < parent.priority){
        var temp = this.values[startIndex]
        this.values[startIndex] = this.values[parentIndex]
        this.values[parentIndex] = temp
      }
      return this
  }
}

var queue = new PriorityQueue()

queue.enqueue(10,1)
queue.enqueue(20,2)




