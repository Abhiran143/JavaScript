let x=10, y=10; 
let result= x==y;
console.log(result)
console.log(x==y) 

let a=10, b=20;
let result2= a==b; 
console.log(result2)
console.log(a==b) 


let c=10;   // 10 given as integer 
let d='10'; // 10 given as character or string 
let result3= c==d;
console.log(result3)  // result3 says it == compares only values as 10 not compares data type
console.log(c==d)   


let e=10;   // 10 given as integer 
let f='10'; // 10 given as character or string 
let result4= e===f;
console.log(result4)  // result4 says it === compares  datatype & values , Result4 will be false
console.log(e===f)   

let g=10;   // 10 given as integer 
let h='10';   
let result5= g!=h;
console.log(result5)  // Not equal to operator  also checks only values not data type
console.log(g!=h)  

let i=10;   // 10 given as integer 
let j='10';   
let result6= i!==j;
console.log(result6)  // Not equal equal to operator  also checks data type as well then value
console.log(i!==j)   


let k=10;   // 10 given as integer 
let l='10';   
let result7= k<l; 
console.log(result7)  // Not equal equal to operator  also checks data type as well then value  
let result8= k<=l;
console.log(k<=l)
let result9= k>l;
console.log(k>l)
let result10= k>=l;
console.log(k>=l)  

/* Ternary Operator like If then else statment having condtion 
 -->  Condition ? Value or expression if true : value or expre if condition false 
*/

let a1 = 21 , a2=22;
let result11 = a2>a1 ? a2:a1
console.log(result11)

