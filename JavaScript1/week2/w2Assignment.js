//Task 1
/*let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let newString=myString.replace(/,/g," ");
console.log(newString);*/

//Task2
/*let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,'meerkat');
console.log('the new string would have meerkat placed between blowfish and capricon, i hope.');
console.log(favoriteAnimals);
console.log('Array has the length of: ' + favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
var a=favoriteAnimals.indexOf('meerkat');
console.log('The item you are looking for is at Index: ' + a);
favoriteAnimals.splice(a,1);
console.log(favoriteAnimals);*/


////////////////////MORE JAVASCRIPT///////////////

//Task 1
/*var a,b,c;
function sumOfThree(a,b,c){
    console.log(a+b+c);
}
sumOfThree(1,'b',3);
sumOfThree('ab','c','d');*/

//Task 2
/*let color='abc';
function colorCar(color){
console.log('A ' + color + ' car.');
}
colorCar('Red');*/

//Task 3
/*var myCar1 = new Object();
myCar1.make = 'Ford';
myCar1.model = 'Mustang';
myCar1.year = 1969;
var myCar2 = {make:'Honda', model:'Civic', year:'2000'};
function carSpecs(car) {
console.log(car);
  }
  carSpecs(myCar1);
  carSpecs(myCar2);*/

  //Task 4
  /*let a=1;
  let color= 'color';
  function vehType(color,a){
    if (a==1){console.log('A ' + color + ' car.');}
    if (a==2){console.log('A ' + color + ' motorbike.');}
  }
  vehType('black',2);*/

  //Task 5
  //(3===3) ? console.log("yes") : console.log("no");

  //Task 6
  /*function vehicle(color,a,b){
    if (a==1){(b>0) ? console.log('A used ' + color + ' car.'): console.log('An unused ' + color + ' car.')} 
    if (a==2){(b>0) ? console.log('A used ' + color + ' motorbike.'): console.log('An unused ' + color + ' motorbike.')}

  }
  vehicle('Red',1,1);*/

  //Task 7, 8 and 9
  /*let vehList = ['car','motorbike','bicycle','quadbike'];
  console.log(vehList[2]);
  function vehicle(color,a,b){
  for(i=0;i<vehList.length;i++)
  if(a==i){(b>0)? console.log('A used ' + color + ' ' + vehList[i]):console.log('An unused ' + color + ' ' + vehList[i])}
  }
vehicle('Red',0,1);*/

//Task 10 and 11
/*let vehList = ['car','motorbike','bicycle','quadbike'];
function ad(){
var a="Amazing Joe's Garage, we service "; 
for(i=0;i<vehList.length;i++){
    if(i==vehList.length-1){a+='and ' + vehList[i] +'s.'}
     else {a+= vehList[i] +'s, '};
}
return a;
}
console.log(ad());
vehList.push('truck');
console.log(ad());*/

//Task 12, 13 and 14
/*var emptyObj = new Object();
var teachers = new Object();
teachers.names=['mike','tommy','victor','chanchal','rasmus'];
teachers.taughtLang = ['HTML/CSS', 'JS'];
console.log(teachers);*/

//Task 15
    /*let x = [1,2,3];
    let y = [1,2,3];
    let z = y;
    console.log(z);
    console.log(x==y);
    console.log(x===y);
    console.log(z==y);
    console.log(z==x);
    console.log(typeof(z));*/

    //Task 16
    /*let o1 = { foo: 'bar' };
    let o2 = { foo: 'bar' };
    let o3 = o2;
    console.log(o3);
    o2.foo='abc';
    console.log(o3);
    console.log(o2);
    console.log('hence changing o2 will change o3');
    o1.foo='xyz';
    console.log(o3);
    console.log(o1);
    console.log('changing o1 will not change o3');
    console.log('the order of assignment soes matter, as we have already declared and given o2 some value.');*/

    //Task 17
   /* let bar = 42;
    console.log(typeof bar);
    console.log(typeof typeof bar);*/
