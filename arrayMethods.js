let fruits =['Apples', 'Grapes','Banana'];
console.log(fruits);

fruits.pop();  //To remove last element of an Array  but if we use fruits[2] = ''; then element will still exists as '' 
console.log(fruits);

fruits.shift();   //To remove first element of an Arrray 
console.log(fruits);

fruits.push('Cherry'); //To add new element at the end of Array 
console.log(fruits);

fruits.unshift('lemmon'); //To add new element at the begining of Array 
console.log(fruits); 

delete fruits[1];     //To delete element from array but position remain exists.
console.log(fruits);  

fruits [1] ='Orange'
console.log(fruits);

fruits.splice(1,2 ) ;  // 1 = start number , 2 delete count ...
console.log(fruits); 

fruits.splice(2,0,'Orange','Banana');  // start number 2 but total count = 0 so none of the element removed then 2 new element added 
console.log(fruits);  

let citrusFruits = fruits.slice(0,2) ; // to insert into new array from existing array 
console.log(fruits);
console.log(citrusFruits);  


let evenNumbers = [2,4,6];
let oddNumbers = [1,3,5];
let primeNumbers = [2,3,5];

let numbers = evenNumbers.concat(oddNumbers, primeNumbers);
console.log(numbers); 