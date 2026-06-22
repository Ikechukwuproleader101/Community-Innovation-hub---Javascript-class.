// function greet(){
//     document.getElementById('name').innerHTML="welcome to javascript class";
// }
// function printpage(){
//     alert();
// }
// //VARIABLES IN JAVASCRIPT
// let carname = "benz, mitsubitshi, mclaren, ferrari";
// let seatnumber = (1,2,3,4,5,6,7,8,9,10);
// let x = 12;
// let z = x + y;
// let s = x - y;
// let t = x * y;
// console.log(z)
// console.log(s)
// console.log(t)
// let $ = "name"; //this is a statement
// let _ = "name";
// let $name = "ademide";

// let _class = "jss2";
// let _class = "jss2";document.getElementById("demo").innerHTML
// ="Hello Dolly!";

// if (true){
//     let name = "john"; // let respects the variable scope.
// }
// console.log(name);

// if (true){
//     var name = "john" //var doesn't respect the variable scope.
// }
// {
//   let score = 0;
//   score = 1;
// }
// window.alert(score)

// {
//     let score = 15;
//     let score = 14;
// }
// console.log(score)

// const age = 28;
// age = 45;
// console.log(age)

// const pi = 3.141592653589793;
// pi = 6;
// console.log(pi)

// let x = 5;
// let y = 6;
// let z = x + y;
// window.alert(z)

// // String
// let color = "Yellow";
// let lastName = "Johnson";
// console.log(typeof color)
// console.log(typeof lastName)

// //number
// let length = 16;
// let weight = 7.5;
// console.log(typeof (length , weight))
// // BigInt
// let a = 1234567890123456789012345n;
// let g = BigInt(1234567890123456789012345)
// console.log(typeof a)
// // Boolean
// let x = true;
// let y = false;
// // console.log(typeof (x , y))

// // Object
// const person = {firstName:"John", lastName:"Doe"};

// // Array object
// const cars = ["Saab", "Volvo", "BMW"];

// // Date object
// const date = new Date("2022-03-25");

// // Undefined
// let t;
// let p;

// // Null
// let c = null;
// let h = null;

// // Symbol
// const m = Symbol();
// const n = Symbol();
// concatenation in javascript.
// let name = "input your name";
// let reason = "what is your reason for joining programming";
// window.alert("My name is" + " " + name + " " + "." + reason )

// let x = 67+15 + 34 + "mufasa" + 25 + + 527527 + 66;
// console.log(x)

// let x = 20;
// let y = 7;
// let z = x % y; // modulus gives us the remainder of a division.
// console.log(z)

// let num1 = 44;
// let num2 = 36;
// // let result = num1 ** num2; // it means 44 ^ 36.
// let result = Math.pow(num1,num2);
// console.log(result)

// let x = 25;
// x -= 45;
// console.log(x)

// let x = 15;
// let y = 20;
// x += y; //x is now equal to x + y
// console.log(x)

// let num1 = 45;
// let num2 = 45;
// let checkvalue = num1 == num2;
// console.log("Is the num1 equal to num2?" + checkvalue )

// let value1 = "60";
// let value2 = 40;
// let checkval = value1 === value2;
// console.log("Is the datatypes and value for value1 and value2 the same :  " + " "+ checkval +
//  "The reason why it is false is because, the typeofvalue1 is " + ""+ typeof(value1),
//  "and the typeofvalue2 is" + " "+ typeof(value2)
// )

// let num = 25;
// let anum = 25;
// console.log(num != anum)
// let num = 25;
// let anum = 25;
// console.log(num <= anum)

// //writing conditional statements.
// let password = String(prompt("input your password"));
// if (password === ("asdf")) {
//     window.alert("Access granted");
// }else if(grade <= 12){
//     window.alert("Acess Denied");
// }else if(grade )

// let score = Number(prompt("input your grade"));
// let maxscore = 100;
// if (score <= 100){
//     window.alert("Your grade is A");
// }
// let email =String(prompt("input your email"));
// email == "ikechukwu@gmail.com";
// let password =Number(prompt("input your password"));
// password == (12345);
// if (email == email && password == password) {
//     window.alert("you have access");
// }else if(email !== email && password !== password){
//     window.alert("try again");
// }
// let email = String(prompt("input your email"));
// let password = String(prompt("input your password"));
// if (email === "ikechukwu@gmail.com" || password === "ademide"){
//     alert("you have access");
// }else{
//     alert("access denied");
// }
// let score = 49;
// if (score >=50) {
//     window.alert("you passed");
// }else{
//     window.alert("you failed");
// }
// let number = 60;
// if(number % 2 == 0){
//     window.alert("This is an even number");
// }else{
//     window.alert("This is an odd number");
// }
// let username =prompt("iput your name");
// let password =prompt("input your passowrd");

// if (username ==("WALE") && password == 12345) {
//     console.log("Login Successful");
// } else if(username ==("deborah") && password == 5678){
//     console.log("Login successful");
// } else if(username =="dubem" && password == 12367){
//     console.log("login successful");
// } else if(username == "adeola" && password == 0.92008){
//     console.log("she is allowed");
// } else if(username == "ike" && password == 0.32008 ){
//     console.log("he is allowed");
// }

// //this is the syntax to write switch case statements.
// let menu =prompt("what food do you want") ;

// switch (menu) {
//     case "rice":
//         window.alert("Your rice is been prepared");
//         break;

//     case "beans":
//         window.alert("Your beans is been prepared");
//         break;
//     case "ofe nsala":
//         window.alert("Your ofe nsala is been prepared");
//         break;

//     default:
//         window.alert("we don't have the food you are ordering");
//         break;
// }
// break;
// let day = Number(prompt("input you day"));
// switch (day) {
//   case 1:
//     alert("thiis is monday");
//     break;
//   case 2:
//     alert("thiis is tuesday");
//     break;
//   case 3:
//     alert("thiis is wednesday");
//     break;
//   case 4:
//     alert("thiis is thursday");
//     break;
//   case 5:
//     alert("thiis is friday");
//     break;
//   default:
//     alert("this is not a day of the week");
//     break;
// }
// let voting = 14; //if they are 18yrs old they can vote
// let voters = voting >= 18 ? "Allowed to vote " : "Not allowed to vote "; //we want to decide those who can vote.
// window.alert(voters)

// let gender = "female";
// let check = gender == "male" ? "You are" + gender : "you are" + gender;
// window.alert(check)


// //CREATING FUNCTIONS IN JAVASCRIPT


// function Name(name , age) {
//     name = "chizoba";
//     age = 20;
//     window.alert("hello" + " " + name + "you are" + " " + age + "years old");
// }
// let result = Name();// we are calling out a function inside a variable.
// //example 2
// function Name() {
//     let name = "chizoba";
//     let age = 20;
//     window.alert("hello" + " " + name + "you are" + " " + age + "years old");
// }
// let Greet = greet();
// function greet(){
//     window.alert("good morning");
// }
// let result = addition();
// console.log(result)
// function addition(){
//     return (5 * 6);
// }
// let result = addvar() ;
// function addvar( num1, num2) {
//     num1 = 45;
//     num2 = 78;
//     return(num1 * num2);
// }
// console.log(result)
// function subtract(a , b){
//     return (a - b);
// }

// let try1 = subtract(56, 12);
// console.log(try1)

// let try2 = subtract(78, 24);
// console.log(try2)

// function cars() {
//   let carName = "Volvo";
//   // code here CAN use carName
// }
// //carName cannot be used here.
// let carName;
// carName = "benz";
// console.log(carName)

// score();

// //ARROW FUNCTION IN JAVASCRIPT. This symbol is for arrow function =>
// let multiply = (a,b) => a * b;
// let mult = multiply( 15, 8);
// console.log(mult)

// let add = (a,b) =>{
//     return a + b;
// }
// console.log(add(34,56))
// const buttton = document.getElementById
// const square = (Event, b=) =>{
    
// }
// ;
// console.log(square())
// let name = "ikechukwu";
// let Greet = (name + " " + "good morning"); 
// for (let greet = 1; greet <= 5; greet +=2) {   
//     document.getElementById("i").innerHTML += greet + "<br>";
// }
// for(let int = 0; int <= 20; int +=2){
//     console.log(int)// this for loop checks for even numbers
// }
// for(let int = 1; int <= 20; int +=2){
//     console.log(int)// this for loop checks for odd numbers
// }
// for(let score = 0; score <=100; score +=1){
//     if (score >=100) {
//         console.log(score + "Grade A")
//     }else if (score >= 90){
//         console.log(score + "Grade B")
//     }else if (score >= 80){
//         console.log(score + "Grade C")
//     }else if (score >= 70){
//         console.log(score + "Grade D")
//     }else if (score >=50){
//         console.log(score + "Grade E")
//     }else{
//         console.log("Failed")
//     }
// }
// let name = "ikechukwu";
// for(let loop = 1; loop <=6 ; loop++){
//     console.log(name)
// }
// function greet(){
//     console.log("good morning");
// }
// for(let get = 1; get <= 3; get ++){
//     greet();
// }
// let number = 3;
// for(let i = 1; i <=12 ; i++){//learning how the break keyword works
//     if (i == 6 ) {
//         continue;
//     }
// console.log(number + " " + "x" +" "+ i + " "+ "=" + (number * i) )
// }
//    let i = 0;//initialization is outside the block scope{}
// while (i < 11) { // This is the condition for the while loop
//     i++; // this is the increment or the loop should count
//     console.log(i)
// }
// let i = 1;
// while (i <= 20) {
//     if (i == 15) {
//         console.log("found it")
//         break;
//     }
//     i++;
// }
// let password = "";
// while(password !== "admin123"){
//     password = prompt("input your correct pasword");
//     if (password == "admin123") {
//         alert("welcome - new user")
//     }else(alert("try again"))   
// }

// let classRoomSize = 10;
// let studentRegistered = 0;
// while(studentRegistered <= classRoomSize){
//     console.log("student" + " " + studentRegistered + " " + "registered");
//     if (studentRegistered ==5) {
//         console.log("half of the class is now filled");
//     }else if(studentRegistered == 8){
//         console.log("Only 2 spaces remaining")
//     }else if(studentRegistered == classRoomSize){
//         console.log("Class Full!")
//     }console.log("Total Student = " + studentRegistered)
//     studentRegistered++;
// }
// let student1 = "John";
// let student2 = "Mary";
// let student3 = "Peter";
// let student4 = "James";
// let student5 = "Sarah";


//               0          1           2          3       4
// console.log(fruits.length.toString())
// console.log(fruits[2],fruits[3])
// console.log(typeof(fruits))
// fruits[1]="agbalumo";
// fruits[2]="guava";  
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.pop()
// console.log(fruits)

// fruits.push("guava","berry","plantain","tangerine");
// console.log(fruits)
// fruits.unshift("strawberry");
// console.log(fruits)
// fruits.shift()
// console.log(fruits)
// let students = ["John", "Mary", "Peter", "James", "Sarah"];
// for(let i =0;i<=students.length;i+=2){
//     console.log(students[i])
// }
// let students = ["John", "Mary", "Peter", "James", "Sarah"];
// for(let i =0;i<=students.length;i+=2){
//     if(students[i] ==="Sarah"){
//         console.log("found it")
//     }
// }
// //i remember using this for my first ig video
// let students = ["John", "Mary", "Peter", "James", "Sarah"];
// console . log(studentindexOf("Mary"))
// let food = [
//     ["yam", "fish","ugwu"],//group index 0
//     ["carbohydrate","protein","veges"]
// ];
// console.log(food[0][0] + "-" + food[1][0])

// let student = "john";
// let student ={
//     name:"john",
//     age:13,
// }
// let cLass = {
//     boys: 15,
//     girls: 30,
// }
// cLass.boys = 35;
// console.log(cLass.boys)

// let car ={
//     type:"saloon", 
//     model:"2020",
//     name:"Renault quid",
//     color:"black",
// }
// car.horsepower = "2000hp";
// console.log(car)
// delete car.horsepower;
// console.log(car)

// let car = {
//     type:"saloon", 
//     model:"2020",
//     name:"Renault quid",
//     color:"black",
//     fetch: function() {
//         console.log(car);
//         console.log(car.name);
//         delete car.type;
//     }
// };
// car.fetch();
// console.log(car)

// let car = function() {
//     console.log("hello")
// }
// car();

const element = document.getElementById('paragraph');
element.innerHTML = "girl";
const tag = 

