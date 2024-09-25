//@ts-ignore

// function sum(a:number, b:number):number{
//     return a + b;

// }
// console.log(sum(5, 20));

// let notanumber: number = NaN;
// console.log('first', notanumber)

// let longText:string = "Hello i am himesha from sydney"
// let shortText:string = longText.substring(10, 0);
// console.log(shortText);


// var str1:string = "hello i am himesha";
// var str2:string = "hello i am himesha";
// var areEqual:boolean = str1 === str2;
// console.log('first', areEqual);


// var product:string = "Maggie"
// var price:number = 10;

// var message:string = `this prodcut ${product} is priced at ${price} dollars `
// console.log('message', message)


// function isDivisibleBy4And8(a:number):boolean{
//      if( a % 4 === 0 && a % 8 ===0){
//         console.log(true);
//     }else if( a % 4 === 0){
//         console.log(true);
//     }else if(a % 8 === 0){
//         console.log(true);
//     }else{
//         console.log(false);
//     }

   
// }

// console.log(isDivisibleBy4And8(25))


// let bigNumber:bigint = 9007199254740991n;
// console.log(bigNumber);

// let anotherBigNumber:bigint = BigInt("90071992547409915");
// console.log(anotherBigNumber);


// var sum = bigNumber + anotherBigNumber;
// console.log('sum', sum);


// let diffrence = bigNumber - anotherBigNumber
// console.log('diffrence', diffrence)

// let product = bigNumber * anotherBigNumber
// console.log('product', product);

// let divison = bigNumber / anotherBigNumber;
// console.log('divison', divison)



// const isPalindrome = (str:string):boolean =>{
//     let strpelindrome =  str.toLowerCase().split('').reverse().join('');
//     // console.log('strpelindrome', strpelindrome)

//     return strpelindrome === str 

// }

// console.log(isPalindrome("123621"))


// const calculateAverage = (arr:number[]):number => {

//     let average = arr.reduce((accum, curIndex) => accum = accum + curIndex,0 )
//     let total = average / (arr.length)
//     // console.log('first', average / arr.length)

// return total;

// }

// console.log(calculateAverage([1,2,3,4,5,10,20]))


// const findMaxValue = (arr:number[]):number => {

//     let sortingnum = arr.sort((a:number, b:number) => b - a )
//     // console.log('first', arr.sort((a, b) => b - a ));
//     return sortingnum[0]
// }

// console.log(findMaxValue([1,2,5,9,4, 20]))


// let message = "Hello, Typescript";
// message = 123;
// console.log('first', message)


// const calculateArea = (length:number, width:num) => {
//     let prodcut = length * width;
//     return prodcut;
// }
// displayProductInfo(prodcut1);
// displayProductInfo(prodcut2);
// console.log(calculateArea(12, 5))


// const value1 = [1, 2, 3, 4, 5]

// console.log(typeof value1);


// const value2 = "Hello World"
// console.log(typeof value2)

// const value3 = {name: "John", age:30}
// console.log(typeof value3);

// const value4 = [true, false, true]
// console.log(typeof value4)

// const value5 = 42;
// console.log(typeof value5)

// const  names = ["Alice", "Bob", "Anna", "Andrew", "Alex", "Ved", "Akira"]

// const upperCaseNames:string[] = names.map((curElem:string) => curElem.toUpperCase() )
// console.log(upperCaseNames)


// const numbers = [1, 2, 3, 4, 5];
// const squareOfNumbers:number[] = numbers.map((curElem:number) => curElem ** 2 )
// console.log(squareOfNumbers);

// const findLengthString = names.filter((curElem:string) => curElem.length > 4);
// console.log(findLengthString);

// const letterAFind = names.filter((curElem) => curElem.charAt(0) === "A" )
// console.log('first', letterAFind)


// const product:{
//     name: string;
//     price:number;
//     quantity:number;
// }={
//     name: "Laptop",
//     price: 100,
//     quantity: 5
// }

// type ProductInfo = readonly[string, number, number]

// const displayProductInfo = (prodcut:ProductInfo) => {
//         const [productName, price, qty] = prodcut;
//         console.log(`Product Name: ${productName}, Price: ${price}, Quantity: ${qty}`);
// }

// const prodcut1:ProductInfo = ["maggie", 10, 1]
// const prodcut2:ProductInfo = ["biscuit", 20, 2]


// const userInput = (value: number | boolean | string): number | boolean | string => {
//     return (typeof value === "number") ? ('$' + value. toFixed(2)) : (typeof value === "string") ? (value[0].toUpperCase() + value. slice(1)): (value === true ? "Yes" : "No");
// }

// // console.log(userInput(10));
// // console.log(userInput("himesha"));
// // console.log(userInput("true"));


// type User = {
//     name:string;
//     email:string;
// }

// type Account = {
//     accountId: number;
//     accountType: string;
//     balance: number;
// }

// const user:User = {
//     name: "himesha",
//     email:"himesha@gmail.com"
// }

// const account:Account = {
//     accountId: 1,
//     accountType: "Saving",
//     balance: 10000
// }
// const combineUserAndAccount = (user:User, account:Account) => {
//     return {...user, ...account}
// }

// const myCompleteInfo: User & Account = combineUserAndAccount(user, account);

// console.log('first', myCompleteInfo)
// function add<T>(a:T, b:T):T;
// function add<T>(a:T, b:T):T;

// function add(a:any, b:any):any{
//     return a + b;
// }

// const result1 = add<number>(5, 10);
// console.log( result1)

// const result2 = add<string>("Hello","World");
// console.log(result2)




