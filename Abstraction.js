// Way of hiding the implementation details and showing only the functionality to users 
//Its Hide details and show essentials 
// This feature tells understandability as well as mentainability of the code  

function Employee (name, age, baseSalary){
     this.name=name;
     this.age=age;
     this.baseSalary=baseSalary;
    let monthlyBonus =1000; //scope is only into class, so outside class value wont be changed 

   let calculateFinalSalary = function() // we have hidden this function to how final sal calc.
    { 
      let finalSalary =baseSalary + monthlyBonus;
      console.log('Final Salary is : ' +finalSalary);
    }

    this.getEmpDetails = function() {
     console.log('Name of Emp :' +this.name+ ' & Age is: '+this.age); 
     calculateFinalSalary();
    }
} 

let emp1 = new Employee('John', 30, 2000);
emp1.getEmpDetails();    // Will show salary as well but hidden how it's implemented 

