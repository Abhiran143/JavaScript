class Employee{

    setDetails(name, id)    //function defination inside class
    {
        this.name= name;  
        this.id=id;
    }  //this.name is variable from class and name is from method/function setDetails
}

class Employee2{

    constructor (name, id)    //Class always have a constructor if we do not provide it 
    {
        this.name= name;    //contructor is always called whenever class is instantiated or object created
        this.id=id;
    }  
}

let emp1 =new Employee();
emp1.setDetails('John',1001); 

console.log(emp1.name);
console.log(emp1.id); 

let emp2 =new Employee2('Kiran', 2001);   // here we passes parameters 
let emp3 =new Employee2('Abhi', 2002);

console.log('Employee 2 name and Id :', emp2.name, emp2.id);
console.log(emp3.name, emp3.id);
