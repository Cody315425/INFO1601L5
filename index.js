/*
let name = "bob";
let age = 24;

let radius = 7;
const pi = 3.14;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< arr.length; i++){
  console.log(arr[i])
}

//Task 2
let area = radius * radius * pi;
console.log(area);

//Task 3
console.log(typeof(name));
console.log(typeof(age));

console.log(`Hello my name is ${name}, I'm ${age} years old`);
console.log(`I was born in ${2020 - age}`);

//Task 4.2
console.log('1' === 1);
console.log(1 === true);
console.log("true" === true);

//Task 4.3
for(let i = 1; i <= 50; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log("fizzbuzz");
  }else if(i % 3 === 0){
    console.log("fizz");
  }else if(i % 5 === 0){
    console.log("buzz");
  }else
    console.log(i);
}

//Page 5
let nowTimestamp = Date.now();

console.log(nowTimestamp);

let now = new Date(nowTimestamp);

let date = new Date(2019, 11, 17, 3, 24, 0);

console.log(date.toLocaleDateString("en-us"));

console.log(`${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()} `);

let difference = now - date;
let daysBetween = difference * 1.15741e-8;
console.log(daysBetween);

//Page 6
function hello(){
  console.log("hello");
}
hello();

//Task 5
function happyPrint(string){
  console.log("😀: "+string);
}

function sadPrint(string){
  console.log("😢: "+string);
}

function add(a, b, callback){
  let ans = a + b;
  callback(ans);
}

add(5, 10, happyPrint);
add(11, 12, sadPrint);

//Task 6(Page 7 Task 2)
function printDate(){
  console.log(new Date().toLocaleTimeString("en-us"));
}

setInterval(printDate, 1000);

//Task 5.1
let arr = [-5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));
console.log(arr);

let lastItem = arr.pop();
console.log(lastItem, arr);

arr.unshift(22);
console.log(arr);

let firstItem = arr.shift();
console.log(firstItem, arr);

let reversed = arr.reverse();
console.log(reversed);
console.log(arr.join('-'));

//Task 5.2
let arr = [12, 33, 4, 5, -4, 8, 19, 25];
                
//map() creates a new array from the elements of one without changing the old one
function double(num){
  return num * 2;
}

let doubledArr = arr.map(double); 
console.log(doubledArr);

function isOdd(element){
  return element%2 !== 0; 
}
//Filter takes a test condition and returns only the element which 
//make the condition true
let odds = arr.filter(isOdd);
console.log(odds);

//Returns true or false if any of the elements of the array 
//meets a specified condition
function has5Factor(ele){
  return ele % 5 === 0;
}

let hasFiveFactor = arr.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
 return a - b;
}

//sort function must return either 0, +ve, -ve
let ascending = arr.sort(intCompare)
console.log(ascending);
*/

function createPerson(name, weight, height){
  return{ name: name, height: height, weight: weight};
}

function calcBMI(weight, height){
  return weight/(height*height);
}

function avgBMI(people){
  let sum = 0;
  for(let person of people){
    sum += calcBMI(person.weight, person.height);
  }
  return sum / people.length;;
}

let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people));