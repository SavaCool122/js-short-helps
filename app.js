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

/* // Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
  });
};

const position = withDefaultValue(
  {
    x: 24,
    y: 42
  },
  0
);

// Hidden properies
const withHiddenProps = (target, prefix = "_") => {
  return new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
  });
};

const data = withHiddenProps({
  name: "Vladilen",
  age: 25,
  _uid: "1231231"
});

// Optimization
const IndexedArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {};
    args.forEach((item) => (index[item.id] = item));

    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case "push":
            return (item) => {
              index[item.id] = item;
              arr[prop].call(arr, item);
            };
          case "findById":
            return (id) => index[id];
          default:
            return arr[prop];
        }
      }
    });
  }
});

const users = new IndexedArray([
  { id: 11, name: "Vladilen", job: "Fullstack", age: 25 },
  { id: 22, name: "Elena", job: "Student", age: 22 },
  { id: 33, name: "Victor", job: "Backend", age: 23 },
  { id: 44, name: "Vasilisa", job: "Teacher", age: 24 }
]); */

// users.findById(11);

// function* strGenerator() {
//   yield "H";
//   yield "e";
//   yield "l";
//   yield "l";
//   yield "o";
// }

// strGenerator();

// function* numberGen(n = 10) {
//   for (let i = 10; i < n; i++) {
//     yield i;
//   }
// }

// const num = numberGen(7)

// Login of Geberator

// const iterrarot = {
//   gen(n = 10) {
//     let i = 0;

//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false };
//         }
//         return { value: undefined, done: true };
//       }
//     };
//   }
// };

// Medoth in array

const people = [
  { name: "Vladik", age: 25, budget: 40000 },
  { name: "Elena", age: 25, budget: 3400 },
  { name: "Igor", age: 23, budget: 55000 },
  { name: "Miha", age: 22, budget: 12345 },
  { name: "Vladils", age: 27, budget: 12453 },
  { name: "Viktory", age: 45, budget: 33300 }
];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// for (let person of people) {
//   console.log(person);
// }
