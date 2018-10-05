// Task1
console.log("Hello, World!");
console.log("Hej, värld!");
console.log("ہیلو دنیا");

//Task2
//console.log('I'm awesome'); escaping literal quote using backslash.
console.log('I\'m awesome');

//Task 3
var x;
console.log('the value of my variable x will be: nothing as it is not given any value.');
console.log(x);
x=10; 
console.log('the value of my variable x will be: integer 10.');
console.log(x);

//Task 4
var y = 'rabbit'
console.log('the value of my variable y will be: the string i assigned it.');
console.log(y);
y='horse';
console.log('the value of my variable y will be: the new string i assigned it.');
console.log(y);

//Task 5
var z=7.25;
console.log(z);
var a= Math.round(z);
console.log(a);
var highNum = Math.max(a,z);
console.log(highNum);

//Task 6
var colors = [];
console.log('the value of array is nothing as i have assigned it nothing.');
console.log(colors);
var favAnimals = ['Dog',' Horse',' Cow',' Eagle'];
console.log(favAnimals);
favAnimals.push(' baby pig');
console.log(favAnimals);

//Task 7
let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//Task 8
var v1 = 1;
var v2 = 'abc';
var v3 = ['a1','a2'] ;
var v4 = true;
console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
console.log('the type of variable v1 is number, v2 is string, v3 is array and v4 is boolean.');
console.log(typeof v1);
console.log(typeof v2);
console.log(typeof v3);
console.log(typeof v4);
if(typeof(v1) == typeof(v2)){
    console.log(v1 + "and" + v2 + 'are of same type.');}
else {console.log(v1 + " and " + v2 + ' not the same type.');}
if(typeof(v1) == typeof(v3)){
    console.log(v1 + "and" + v3 + 'are of same type.');}
else {console.log(v1 + " and " + v3 + ' not the same type.');}
if(typeof(v1) == typeof(v4)){
    console.log(v1 + "and" + v4 + 'are of same type.');}
else {console.log(v1 + " and " + v4 + ' not the same type.');}
if(typeof(v2) == typeof(v3)){
    console.log(v2 + "and" + v3 + 'are of same type.');}
else {console.log(v2 + " and " + v3 + ' not the same type.');}
if(typeof(v2) == typeof(v4)){
    console.log(v2 + "and" + v4 + 'are of same type.');}
else {console.log(v2 + " and " + v4 + ' not the same type.');}
if(typeof(v3) == typeof(v4)){
    console.log(v3 + "and" + v4 + 'are of same type.');}
else {console.log(v3 + " and " + v4 + ' not the same type.');}

//Task 9
var x=9;
console.log(x);
console.log('the value of x is 9 but next line will store the remainder of 9 divided by 3 in \'x\'');
x=x%3;
console.log(x);

//Task 10
var newArray = ['abc', 2018, true, undefined];
console.log(newArray);
console.log('so an array can store multiple datatypes');
var a1 = 6/0;
var a2 = 10/0;
if(typeof(a1)===typeof(a2)){
    console.log('yes we can compare infinites, they have same type.')
}