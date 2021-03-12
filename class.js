class Student{
  constructor(firstName, lastName, rollNumber){
    this.firstName = firstName
    this.lastName = lastName
    this.rollNumber = rollNumber
    this.backlogs = 0
    this.scores = []
  }

  fullName(){
    return `Your full name is  ${this.firstName} ${this.lastName}`
  }

  rno(){
    return `Your roll number is  ${this.rollNumber}`
  }
  back(){
    this.backlogs +=1
    if(this.backlogs>=3){
      return "YOU ARE EXPELLED FROM THE COLLEGE!!!!"
    }
    return `YOU HAVE ${this.backlogs} backlogs`
  }

  score(marks){
    this.scores.push(marks)
    return this.scores
  }
}

let student1 = new Student("Deepak","Rawat", 14)
let student2 = new Student("Sanjeev","Kanth", 10)
console.log(student2.score(25))
console.log(student2.score(40))
console.log(student1.score(20))
console.log(student2.score(80))
console.log(student1, student2)
