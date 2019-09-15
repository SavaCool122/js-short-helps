// const person = {
//   name: "MAx",
//   age: 22,
//   greet: function() {
//     console.log("Greet");
//   }
// };

// Фунция умнгжения в прототипе

// Array.prototype.multBy = function(n) {
//   return this.map(function(i) {
//     return i * n;
//   });
// };

// console.log(array.multBy(20));

// Замыкания

// function urlGenerator(domain) {
//   return function(url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerator("com");

// console.log(comUrl("google "));

//////////Решенная таска

// function bind(context, fn) {
//   return function(...args) {
//     fn.apply(contex, args);
//   };
// }

// function logPerson() {
//   console.log(`Person ${this.name} , ${this.age}, ${this.job}`);
// }

// const person1 = { name: "max", age: 22, job: "Frontend" };

// const person1 = { name: "Olya", age: 18, job: "SMM" };

// bind(person1, logPerson);
// bind(person2, logPerson);

// Promis

/* const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

sleep(2000).then(() => console.log("After 2 seconds"));
sleep(3000).then(() => console.log("After 3 seconds")); 

*/

// Async and Await

// url for test
/* const url = "https://google.com";

//delay build on promis and Timeout 
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

//Asinc function
async function fetchAsyncTodos() {
  console.log("Fetch todo started....");
  await delay(2000);
  const response = await fetch(url);
  const data = await response.json();
  console.log("Data: ", data);
}


//Use the function
fetchAsyncTodos();
 */
