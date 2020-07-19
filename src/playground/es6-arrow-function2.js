//arguments object-no longer bound with arrow functions

// const add=(a,b)=>{
//     // console.log(arguments)
//     return a+b;
// }

// console.log(add(1,2));

//this keyword-no longer bound

const user={
  name:"Yongyuan",
  cities:["New York","Dublin"],
  //bounded this value in ES5 function but no in ES6 Arrow Function
  //this is a new way to define function in ES6
  //map in ES6 is much better than forEach beacuse you can transform an array back from map
  printPlacesLived(){
 return this.cities.map((city)=>this.name +" Has lived in "+ city +"!");

 
  }
};

console.log(user.printPlacesLived());

// challenge area


const multiplier={
    //number-array of numbers
    nums:[1,2,3,4],
    //multiplyBy -single number
    multiplyBy:2,
    // multiply -return a new array where the number have been multiplied
  multiply(){
    return this.nums.map((numbers)=>numbers *this.multiplyBy);
}
}
console.log(multiplier.multiply());