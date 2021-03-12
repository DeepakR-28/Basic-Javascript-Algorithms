
/* this class is to create new nodes, the constructor method is by default the way it is, we initialise the val and next for a particular node */
class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

/* this class is for creating the linkedlist, the constructor method contains the head and tail of the linked list, i.e nothing but the main aspects related to a linked list*/
class singlyLinkedList{
  constructor(){
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val){
    let newNode = new Node(val) //creating a new node here with value store in val
    if(this.length<1){
      this.head = newNode //initially the head and tail will be the same first node
      this.tail = this.head
    }
    else{ //if there are elements already there, the elemts will be pushed behind the tail
      this.tail.next = newNode 
      this.tail = newNode
    }
    this.length++
  }
  pop(val){
    let newNode = new Node(val)
    if(!this.head){
      return "list empty"
    }
    else{
      let pre = this.head
      let temp = this.head.next
      while(temp.next!=null){
        pre = pre.next
        temp = temp.next
      }
      this.tail = pre
      this.tail.next = null
      this.length--
    }
  }
  shift(val){
    if(this.head){
      let newNode = new Node(val)
      let temp = this.head
      this.head = temp.next
      temp.next = null
      console.log(`Successfully removed ${temp.val}`)
    }
    else{
      return "List Empty"
    }
    this.length--
  }
  unShift(val){
    let newNode = new Node(val)
    let curr = this.head
    this.head = newNode
    newNode.next = curr
  }
  get(index){
    if(!this.head || index>this.length) return "out of range"
    else{
      let position = 0
      let curr = this.head
      while(position<=this.length){
        if(index != position){
          curr = curr.next
          position++
        }
        else{
          return curr
        }
      }
      return false
    }
  }
  set(index, val){
    let foundNode = this.get(index)
    if(foundNode){
      foundNode.val = val
      return true
    }
    return false
  } 
  insert(index,val){
    let newNode = new Node(val)
    let position = 0
    let prev = this.head
    let curr = prev
    while(1){
      if(position != index){
        console.log(position, prev.val, curr.val)
        position++
        prev = curr
        curr = curr.next
      }
      else{
        let temp = curr
        prev.next = newNode
        newNode.next = temp
        break
        console.log(linkedList)
      }
    }
  }
  remove(index){
    let prev = this.head
    let curr = prev
    let position = 0
    while(1){
      if(position != index){
        position++
        prev = curr
        curr = curr.next
      }
      else{
        prev.next = curr.next
        this.length--
        break
      }
    }
  }
  reverse(){
    let node = this.head
    this.head = this.tail
    this.tail = node

    let next;
    let prev = null
    for(var i = 0; i<this.length;i++){
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}
let linkedList = new singlyLinkedList
linkedList.push(10) 
linkedList.push(20) 
linkedList.push(30)
linkedList.push(40)
linkedList.remove(1)
console.log(linkedList)
console.log(linkedList.reverse())

