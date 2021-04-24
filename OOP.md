## Object Oriented programming in Javascript
#### Object  - Object is anything with some properties, 
#### eg :
- Student has properties like name, age, gender, roll number
- Car has properties like, Brand, type, price etc...

```
A student object can be created like this

Student = {
  name : "Ambani",
  roll_number : 36,
  age : 20,
  gender : male
}
```
But creating an object for all students might be tough, so we create a constructor, which will act like a skeleton for all the details required.

#### Constructor
- Constructor is a function
- First letter always capital in the Constructor name ( ex - function Student = {} ).
- Constructor is used to define object properties "=" is use to assign values
- A constructor can be created in the below specified manner
- constuctor uses the ```this``` keyword.
```
function Student(){
  this.name = "Ambani"
  this.roll_number  = 36
  this.age = 20
  this.gender = male
}
```

creating an instance of a constuctor can be done i the following way

let student = new Student()

student variable will hold the object
```
{
  name : "Ambani"
  roll_number  : 36
  age : 20
  gender : male
}
```

We have created a constructor and a object, but if I want to enter data of another student, I will have to redo the whole process.

example : let student2 = new Student()
here student and student2 will have the same values

n order to fix that we can make some changes to our Student constructor, we can pass arguments that are going to be present in the object

```
function Student(name,rno,age,gender){
  this.name =name
  this.rno  = rno
  this.age = age
  this.gender = gender
  this.stream = "science"
}
```
Now let's create an instance for this constructor

```
 let student1 = new Student("Ambani", 15, 20, male) 
 let student2 = new Student("Anil", 16,20,male)
```

The above two objects are created from the same constructor and have different values (```mind === blown```)

```
student1 = {
  //values passed in student 1 along with the common value for all instances/object i.e stream
}

```


the object properties defined in the constructor are called own property, it can be checked using the below syntax
```student1 instanceof Student //will return true```


Now we know about own properties

imagine if there is a property that is repeated in instances, but is required for only a few, those sort of properties can be applied using prototype keyword

```Student.prototype.dead = true```

so every instance of sudent will be set as dead but it won't be displayed in the object.


## Inheritance
Imagine another constructor example

```
function Dog(){

// properties 

}

function Cat(){

  //properties
}
```

Now that both have many distinguishing features, and many similar features.

we can create a superConstructor/ parent/ superType which will contain all the common properties of cats and dogs

```
function CommonBetweenDogsAndCats(){

}
CommonBetweenDogsAndCats.prototype = {

legs : 2
eyes : 2
}
```

Now that we have the common properties specified in CommonBetweenDogsAndCats, we can inherit these in our child constructors i.e Cats and Dogs

before inheriting, another way to create instance is

```let Dog = Object.create(CommonBetweenDogsAndCats.prototype)```

### Inheriting values from superType

```Dog.prototype = Object.create(CommonBetweenDogsAndCats.prototype)
```
Hooorayyy we have inherited successfully
but!!!! there is still a problem.. 

```
Dog.prototype = Object.create(CommonBetweenDogsAndCats.prototype)
let labrador = new Dog()
labrador.Constructor
```

labrador is an instance of Dog constructor, but it thinks it is made up from the supertype constructor...

to resolve this we can do this
```
Dog.prototype.constructor = Dog
labrador.constructor
```
now my labrador knows that it is an instance of Dog and not the supertype from where it inherited some values like eyes and legs/

### Overriding
This is a code snippet from Freecodecamp
```
function Animal() { }   //animal constructor, parent 
Animal.prototype.eat = function() {
  return "nom nom nom";    //creating prototype methods
};
function Bird() { } //childObjec/constructor

Bird.prototype = Object.create(Animal.prototype);  //inheriting values from Animal

Bird.prototype.eat = function() {
  return "peck peck peck";  //overriding
};
```


Updating values in students is comparatively easy
just do what you do in hashmaps/object using dot or [] notation

## Mixin
```
let flyMixin = function(obj) { //initialize and pass a object
  obj.fly = function() { //create prototype properties on the go
    console.log("Flying, wooosh!");
  }
};
```
