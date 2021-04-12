//rewriting to understand

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
  insert(value){
    var newNode = new Node(value)
    if(this.root == null){
      this.root = newNode
      return this
    }
    else{
      var parent = this.root
      while(1){
        if(value < parent.value){
          if(parent.left == null){
            parent.left = newNode
            return this
          }
          else{
            parent = parent.left
          }
        }
        if(value > parent.value){
          if(parent.right == null){
            parent.right = newNode
            return this
          }
          else{
            parent = parent.right
          }
        }
      }
    }
  }
  find(value){
    if(!this.root) return "Nothing in the list"
    if(!this.root.left && !this.root.right)
    {
      return this.root.value
    }
    else{
      var parent = this.root
      if(parent.value == value){
        return "Element found at root"
      }
      while(1){
        if(value < parent.value){
          if(parent.left == null){
            return "Element not in the tree"
          }
          else{
              parent = parent.left
              if(parent.value == value){
              return "Element Found on a left node"
            }
          }
        }
        if(value > parent.value){
          if(parent.right == null){
            return "Element not in the tree"
          }
          else{
              parent = parent.right
              if(parent.value == value){
                return "Element found on a right node"
              }
            }
          }
        }
      }
    }
    bfs(){
      if(!this.root) 
      {
        return "Empty tree"
        }
      else{
        var queue = []
        var visited = []
        queue.push(this.root)
        var parent = this.root
        while(queue.length != 0){
          visited.push(queue[0].value)
          parent = queue[0]
          queue.shift()
          if(parent.left){
            queue.push(parent.left)
          }
          else if(parent.right){
            queue.push(parent.right)
          }
        }
        return visited
      }
    }
  }

var tree = new BST()
tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(3)
console.log(tree.find(3))
console.log(tree.bfs())