let numbers = [1,2,3,4,5];
console.log(numbers);

let fruits = ['Apple', 'Banana', 'Grapes'];
console.log(fruits);

let cars= new Array('ford', 'toyoto', 'volksvegaon');
console.log(cars);

console.log(cars[1]);
cars[1]='honda';
console.log(cars[1]);
console.log(cars); 

let x;
for( x in fruits)
{
    console.log(fruits[x]);
}

for(x of fruits)
{
    console.log(x);
}           

console.log(fruits.length);
console.log(cars.length);