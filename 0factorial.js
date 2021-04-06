/*function factorial(num){
  var output = 1
  for(var i = 1;i<=num;i++){
    output = output * i
  }
  console.log(output)
}

factorial(10); */

function factorialRecursion(num){
  if(num==1){
    return 1
  }
  return num *factorialRecursion(num-1 )
}

console.log(factorialRecursion(10));