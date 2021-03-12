 class Node{
   constructor(val){
     this.val = val
     this.next = null
   }
 }

 class LinkedList{
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
        this.tail = newNode
      }
      this.length++
   }
   pop(val){
     let newNode = new Node(val)
     if(!this.head) return "List Empty"
     else{
       let prev = this.head
       let curr = this.head.next
       while(curr.next != null){
         prev = curr
         curr = curr.next
       }
       prev.next = null
       this.tail = prev
       this.length--
     }
   }
   shift(){
     if(!this.head) return "Empty list"
     else{
       let next = this.head.next
       this.head = next
       this.length--
     }
   }
   unshift(val){
     let newNode = new Node(val)
     if(!this.head){
       this.head = newNode
       this.tail = this.head
     }
     else{
       let previousHead = this.head
       newNode.next = previousHead
       this.head = newNode
       this.length++
     }
   }
   get(index){
     if(index>this.length || index<0 || !this.head) return "Undefined"
     else{
       let position = 0
       let curr = this.head
       while(position!=index){
         curr = curr.next
         position++
       }
       return curr
     }
   }
   set(index,value){
     if(!this.get(index)) return "Undefined"
     else{
       let curr = this.get(index)
       curr.val = value
     }
   }
   insert(index, value){
     let newNode = new Node(value)
     if(!this.head || index>this.length+2 || index<0) return "undefined"
     else{
       let position = 0
       let prev = this.head
       let curr = prev
       while(position != index){
         prev = curr
         curr = curr.next
         position++
       }
       prev.next = newNode
       newNode.next = curr
       this.length++
     }
   }
   remove(index){
     if(!this.head) return "Empty List"
     else{
       let prev = this.head
       let curr = prev
       let position = 0
       while(position!=index){
         prev = curr
         curr = curr.next
         position++
       }
       this.length--
       prev.next = curr.next
       console.log(prev,curr)

     }
   }
   reverse(){
     let node = this.head
     this.head = this.tail
     this.tail = node
     let prev = null
     let next;

     for(var i=0;i<this.length;i++){
       next = node.next
       node.next = prev
       prev = node
       node = next
     }
   }
 }

let list = new LinkedList()

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)

// list.set(2,25)
// list.pop()
// list.shift()
// list.remove(2)
console.log(`Initial LinkedList`)
console.log(list)
list.reverse()
console.log(`Reverserd LinkedList\n ${this}` )
console.log(list)