class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null
  }
  insert(value){
      var newNode = new Node(value)
      if(!this.root){
        this.root = newNode
        return this
    }
    var current = this.root
    while(1){
      if(value < current.value){
        if(current.left == null){
          current.left = newNode
          return this
        }
        else{
          current = current.left
        }
      }
      if(value > current.value){
        if(current.right == null){
          current.right = newNode
          return this
        }
        else{
          current  = current.right
        }
      }
    }
  }
  find(value){
    if(!this.root) return "Nothing in the tree"
    if(this.root == value) return "Found at root"
    else{
      var parent = this.root
      
      while(1){
        if(value > parent.value){
          if(parent.right == null){
            console.log( `Element not found last parent node visited was ${parent.value}`)
            break
          }
          else{
            parent = parent.right
            console.log(parent)
            if(parent.value == value) {
              console.log( `Element found at parent ${parent.value}`)
            } 
          }
        }
        else if(value < parent.value){
          if(parent.left == null){
            console.log (`Element not found, last parent node visited was ${parent.value}`)
          }
          else{
            parent = parent.left
            console.log(parent)
            if(parent.value == value) {
              console.log( `Element found at parent ${parent.value}`)
            } 
          }
        }  
      }
    }
  }
}
var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(7)
tree.insert(13)
tree.insert(3)
tree.insert(14)
tree.insert(12)
tree.find(8)
console.log(tree)