class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val){
    let newNode = new Node(val)
    if(this.length<1){
      this.head = newNode
      this.tail = this.head
    }
    else{
      this.tail.next = newNode 
      this.tail = newNode
    }
    this.length++
  }

  /* ********* SORTING BEGINS HERE ******** */

  bubbleSort(){
    for(var i=0;i<this.length-1;i++){
        var curr = this.head
        for(var j =0;j<this.length-1;j++){
            if(curr.val>curr.next.val){
                var temp = curr.next.val
                curr.next.val = curr.val
                curr.val = temp
            }
            curr = curr.next
        }
    }
    return this
  }

  mergeSortedList(l1, l2){
    var fakeNode =  new Node(-1) 
    var last = fakeNode
    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            last.next = l1
            last = l1
            l1 = l1.next
        }
        else{
            last.next = l2
            last = l2
            l2 = l2.next
        }
    }
        if(l1!=null){
            last.next = l1
        }
        if(l2!=null){
            last.next = l2
        }
    return fakeNode.next
}
  mergeSort(head){
    if(this.head == null || this.head.next == null){
      return this.head
    }

    var temp = this.head
    var slow = this.head
    var fast = this.head
    while(fast != null && fast.next != null){
      temp = slow
      slow = slow.next
      fast = fast.next.next
    }
    console.log(temp)
    temp.next = null
    return this.mergeSortedList(this.mergeSort(this.head), this.mergeSort(temp))
  }
}

let linkedList = new LinkedList()
linkedList.push(5) 
linkedList.push(4) 
linkedList.push(3)
linkedList.push(2)
linkedList.push(1)
linkedList.mergeSort()
console.log(linkedList)
