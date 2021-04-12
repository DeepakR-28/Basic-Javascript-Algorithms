### Algorithms in JavaScript

#### This repo/repl contains the following

#### Linear and Binary Search
- linear search is just searching after iterating thru the whole list.
- Binary search is splitting the array in halves continuously until you find the element. 
```
  while(last-first>=2){  
    if(val>arr[mid]){
      first   = mid
      mid = Math.floor((first+last)/2)
      if(arr[mid] == val){
        return "Element found at postition " + mid
      }
    }
    else if(val<arr[mid]){
      last = mid
      mid = Math.floor((first+last)/2)
      if(arr[mid] == val){
        return "Element found at postition " + mid
      }
    }
  }
```
#### Sorting Algorithms 
Check comments in the code
- Bubble Sort (compare 2 at a time until sorted)
- Selection Sort(Find min and insert in the begenning)
- Insertion Sort(Compare each element to all its predecessors and insert at the right position)
- Merge Sort (recursion is a bitch.)


#### Stack and queues
- stack is push and pop 
- queue is unshift and pop or shift and push (shift => removing from the begenning unshift is the opposite)

#### Linked list 
```
Singly Linked List
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
// all the routines will go here.  
}

Doubly Linked List
only the node class will have a prev which will point to the previous node

class Node{
  constructor(val){
    this.val = val
    this.next = null
    this.prev = null
  }
}

remaining is same
```

#### Binary Search tree

A BST is implemented like a linked list, where the left and right are two child nodes of the parent node.

the top-most node is called the root node where the BST starts.
subsequent nodes are the child of the root and each child has a parent.

the nodes with no child nodes are called leaf nodes.
```
class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}
class BST{
  constructor(){
    this.root = null
  }
}

```
Rules
- left child < right child
- if  newNode's value is < parent value then traverse thru the left part of the tree
- if newNode's value is > parent value then traverse thru the right part of the tree
- almost same logic for finding elements in a tree

#### Tree Traversal
Tree traversal can be done in mainly 2 ways.
- BFS -> Breadth First Search
- DFS -> Depth First Search
    - PreOrder Traversal
    - PostOrder traversal
    - InOrder Traversal

#### Breadth First Search

Traverse thru the list horizontally

Algorithm
- BFS uses a queue for traversal
- create 2 queues (create 2 lists and name them queue and visitedNodes)
- push the root node initally in the queue
- **now comes the main part**
- ```
        while(queue.length != 0){  //run a while loop until the queue becomes empty
          visited.push(queue[0].value)   // push the first value of the queue in visitedNodes list and set it as parent 
          parent = queue[0]  
          queue.shift()  //remove the first element of the queue now
          if(parent.left){   //if the parent has a left child it will push that left child to the queue, same thing for the right child  
            queue.push(parent.left)
          }
          if(parent.right){
            queue.push(parent.right)
          }
        }
  ```
- to understand it better create a sample tree and try to run it

- return the visitedNode list once you are done traversing the list, you can stop traversing once you find the element too.

#### Depth First Search

In order to perform DFS we use recursion

3 ways as mentioned above
- Preorder
  - create a list that will store the node values
  - create a variable current that will store the root value
  - create a function traverse that will accept 1 value
  ```
  function traverse(node){
        visited.push(node.value)
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
      }
      traverse(current);
  ```
  - after the recursion is completed we will return the visited list

- POst order 
  - everything is same as preorder, just that we push after traversing the whole tree
  ```
    function traverse(node){
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
        visited.push(node.value)
      }
      traverse(current);
  ```

- Inorder
   ```
  visited.push(node.value)
  ```
  - this line will come in between, traverse the left, push values then traverse the right
  

#### Heaps

Heaps are visualized in a tree format, a BST to be apt, but in a Heap a parent must have two children, and a new node is always created in the end starting form the left.

Heaps are visualized in a tree format but saved in arrays.
There are two types of heaps, minheap and maxheap.

In a maxheap the parent is > both children nodes, vice versa for min heap.


3 formulas are used to find the relation between the parent left child and right child

if the index of a parent is n then index of the left child is 2n+1
and the right child is calculated using 2n+2.

if we have to find a parent for a node/element.
```
Math.floor(n-1)/1
```

that is it, start creating your heaps.

in a heap element is added in the base at the end
Removing an element
- element is always removed from the root.
- after removing swap the last element to the root postition, after swapping perform some operation to find the correct position of the new root.


#### Priority queue

A priority queue is a minheap where list consists of node and each node has 2 values, priority and value.
lowest prioirity elements come on top. and smaller the number higher the priority, hence a minheap can be used to represent a priority queue.