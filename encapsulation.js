/* Wrapping up of data into single class in the form of data and function
It's an mechanism to restricting direct access to object's components 
mechanism of bundling data with methods that operates on that data 
Security controled access , Loose coupling - Modify the implementation anytime. */ 

class Employee {

    setEmpDetails(name, id, phoneNo){

        this.name=name;
        this.id=id;
        this.phoneNo=phoneNo;
    }   
    getEmpName(){
        return this.name;
    }  
    getEmpId(){
        return this.id;
    }   
    getEmpphoneNo(){
        return this.phoneNo;
    }
}    

let emp1 = new Employee(); 
emp1.setEmpDetails('Abhinav', 'A_0001', 981212120);
console.log(emp1.getEmpId(), emp1.getEmpName(), emp1.getEmpphoneNo());
console.log(emp1.id, emp1.name, emp1.phoneNo);