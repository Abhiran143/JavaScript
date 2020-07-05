/*Process where one class acquires the properties (methods and fields ) from another class 

Class whose properties to be acquired is called base, super, parent class 
Class who uses properties is called derived, sub, child class   */ 

class Car{

    setDetails(name){
        this.name=name;
    }

    startEngine(){ 
        console.log('Engine started for :' +this.name);
    } 
    
    stopEngine(){ 
        console.log('Engine stopped for :' +this.name);
    }   
}  

class Toyota extends Car{

    topSpeed(speed) {
        console.log('Top Speed for ' +this.name+ ' is:' +speed);
    }

}  

let myCar = new Toyota();
myCar.setDetails('CarryMan');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(210);
