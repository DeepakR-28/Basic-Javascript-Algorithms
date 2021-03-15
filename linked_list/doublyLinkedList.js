class Node{
  constructor(val){
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = this.head
    }
    else{
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
  }
  pop(){
    if(!this.head) return "Nothing in the list"
    if(this.length == 1){
      this.head = null
      this.tail = null
  }
  else{
    let lastNode = this.tail
    lastNode.prev.next = null
    this.tail = lastNode.prev
    lastNode.prev = null
    this.length--
    return lastNode
     } 
  }
  shift(){
    if(!this.head) return "undefined"
    if(this.length === 1){
      this.head == null
      this.tail == null
    }
    else{
      let curr_head = this.head
      this.head = curr_head.next
      curr_head.next = null
      this.head.prev = null
    }
    this.length--
    return this.head
  }
  unshift(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }
    else{
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
  }
  get(index){
    if(!this.head || index> this.length-1) return undefined
    else{
      let mid = Math.round(this.length/2)
      if(index<mid){
        let position = 0
        let curr = this.head
        while(position != index){
          curr = curr.next
          position++
        }
        return curr
      }
      else{
        let position = this.length
        let curr = this.head
        while(position != index){
          curr = curr.next
          position--
        }
        return curr
      }
    }
  }
  set(index, val){
    if(!this.head) return undefined
    else{
      if(this.get(index)){
        let position = this.get(index)
        position.val = val
      }
    }
  }
  insert(index, val){
    if(!this.head) return undefined
    else{
      if(this.get(index)){
        let newNode = new Node(val)
        let position = this.get(index)

        let temp = position.prev
        position.prev = newNode
        newNode.next = position
        newNode.prev = temp
        temp.next = newNode
      }
    }
  }
  remove(index){
    if(!this.head) return undefined
    else{
      if(this.get(index)){
        if(index == this.length - 1){
          this.tail.prev.next = null
          this.tail = this.tail.prev
        }
        else{
          let position = this.get(index)
          let previous = position.prev
          let next = position.next
          previous.next = next
          next.prev = previous
          
        }
      }
    this.length--
    }
  }
}

let list = new DoublyLinkedList()
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.remove(3)
console.log(list)