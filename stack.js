class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Stack{
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }
  
  push(val){
    var newNode = new Node(val)
    if(!this.first){
      this.first = val
      this.last = val
      // this.last.next = null
    }
    else{
      this.last.next = newNode
      this.last.next = null
      this.size++
    }
  }
  pop{
    if(!this.first) return "Null"
    var temp = this.first
    if(this.size == 1){
      this.last = null
    }
    this.first = this.first.next
    return temp

  }
}

var newStack = new Stack()

newStack.push(10)
newStack.push(20)
newStack.push(30)
console.log(newStack)