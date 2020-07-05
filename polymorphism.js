// Poly means - Many , morph means form. 
// Polymorphism in OOP is ability to create a variable, function,
// object that has more than one form  

class Animal {
 
    constructor(name){
     this.name=name;
 } 
  eats() {
       console.log(this.name+ ' eats food'); 
  }
}  


class Alligator extends Animal{
   
     eats() {
         super.eats ();   // refers to parent method here 
         console.log(this.name + ' eats Fish');
     } 

}

let animal = new Animal('Dog');
animal.eats(); 
let murphy = new Alligator('Murphy');
murphy.eats();        /* Child class method eat gets override on parent class method eat 
                      if no same method exists into child then parent class eat method 
                       wiill be refered */  

