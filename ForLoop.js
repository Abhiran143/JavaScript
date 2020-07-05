let i;
for(i=0; i<=5; i++)
{
    console.log('The Value of i is:', +i);
}
let j ;
for(j=5; j>=0; j--)
{
    console.log('The Value of J is:', +j);
}

let fruits = ['Apple', 'Banana', 'Grapes'];
let x;  
for(x in fruits)   // Index needs to be given into In 
{
     console.log(fruits[x]);
}

for(x of fruits)   //index not required to given just give variable
{
     console.log(fruits);
}