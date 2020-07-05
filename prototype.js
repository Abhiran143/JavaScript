/* In JS every function has property called as prototype. 
By defaultt this property is empty  and you can add properties and methods to it. 
 In javascript you can create constructor without creating class  
Suppose there is function x, when you create another function that is inherited from X,
 it will inherit the methods and properties defined in X's prototype */

 let EmpDetails = function(name, age) {
    this.name=name;
    this.age=age;
};

EmpDetails.prototype.getName=function(){  //getName inherited from EmpDetails
    return this.name;
};

EmpDetails.prototype.getAge=function(){  //getAge inherited from EmpDetails
    return this.age;
};  

let emp1 = new EmpDetails('John', 30);
let emp2 = new EmpDetails('Peter', 40);
console.log(emp1.getName());
console.log(emp2.getAge());
/* when we create any new object for this constructor, All of these objects having all
 of the above functions getName, getAge inherited with EmpDetails
  i.e. also called prototype based inheritance into javascript */ 
  
