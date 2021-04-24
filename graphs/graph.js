class Graph{
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    return this
  }
  addEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdge(vertex1,vertex2){
    // var index1 = this.adjacencyList[vertex1].indexOf(vertex2)
    // this.adjacencyList[vertex1].splice(index1,1)
    // var index2 = this.adjacencyList[vertex2].indexOf(vertex1)
    // this.adjacencyList[vertex2].splice(index2,1)
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v!= vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v!= vertex1)
  }
  removeVertex(vertex){
    for(var edge of this.adjacencyList[vertex]){
      this.removeEdge(vertex,edge)
    }
    delete this.adjacencyList[vertex]
  }


  /* 
  depthFirstRecursive(start){
    var result =[];
    var visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex){
      if(!vertex) return "Early";
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach(neighbor =>{
          if(!visited[neighbor]){
            dfs(neighbor)
          }
        })
    })(start);
    return result
  }
  */
  dfsRecursive(start){
    var result = [];
    var visited = {};
    var adjacencyList = this.adjacencyList;
    function dfs(vertex){
      if(!vertex) return null
      result.push(vertex)
      visited[vertex] = true
      adjacencyList[vertex].forEach(neighbor =>{
        if(!visited[neighbor]){
          dfs(neighbor)
        }
      })
    }
    dfs(start)
    return result
  }

  depthFirstIterative(start){
    var stack = [];
    var result = [];
    var visited = {};
    var adjacencyList = this.adjacencyList
    stack.push(start)
    while(stack.length!=0){
      var popped = stack.pop();
      if(!visited[popped]){
        visited[popped] = true
        result.push(popped);
        adjacencyList[popped].forEach(neighbor => {
          stack.push(neighbor)
        })
      }
    }
    return result
  }
}

var g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
// console.log(g.adjacencyList)
// g.removeVertex("Delhi")
console.log(g.dfsRecursive("A"))
// console.log(g.depthFirstIterative("A"))
// console.log(g.adjacencyList)