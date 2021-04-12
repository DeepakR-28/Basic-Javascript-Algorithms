
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
console.log(linkedList)
console.log(linkedList.reverse())

