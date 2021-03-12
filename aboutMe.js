class User{
  constructor(firstName,age){
    this.name = firstName
    this.age = age
    this.likes = []
  }
  hobbies(hobby){
    this.likes.push(hobby)
  }
  returnLikes(){ 
    console.log("User hobbies are listed below \n")
    for(var i=0;i<= this.likes.length;i++){
      console.log(this.likes[i])
    }
  }
}

let user1 = new User("Deepak", 21)
user1.hobbies("writing")
user1.hobbies("reading")
user1.hobbies("photography")
user1.hobbies("other random stuff")
console.log(user1)


