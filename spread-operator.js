console.log(Math.min(27, 32, 24, 11, 344, -3, -5, 1, 54)); //Works min number

//log is -5

const tempatures = [36, 33, 35, 37, 48];

console.log(Math.min(tempatures)); // Not works result Nan

//log is NaN

console.log(Math.min(...tempatures)); // Works fine withe spread operrator

//log is 33

const tvShows = ['Six feet under', 'Black Mirror', 'Fleabag'];

console.log(tvShows); //log a ugly array

//log is [ 'Six feet under', 'Black Mirror', 'Fleabag' ]

console.log(...tvShows); //log a beaty strings

//log is Six feet under Black Mirror Fleabag

console.log(...'BANANAS'); // Log every latter

//log is B A N A N A S

console.log(Math.min(...'24125125')); // Log min nuber in string

//log is 1

const parents = ['LOrie', 'Jack'];
const kids = ['Sava', ' Artur'];
const dog = ['Upiter'];

console.log([...parents, 'ME', ...kids, ...dog]); // LOg all array in one

//log is [ 'LOrie', 'Jack', 'ME', 'Sava', ' Artur', 'Upiter' ]

const origin = ['Sava', 'Danil'];

const copy = origin;

copy.push('Sofa');

console.log(origin); // log copy with new element - BAD

//log is [ 'Sava', 'Danil', 'Sofa' ]

const copies = [...origin]; // With spread  no problem

console.log(copies);

copies.push('Sofa');

console.log(copies); //LOg only new array

console.log(origin);

// log is [ 'Sava', 'Danil']

console.log('\n\n\n\n\n\n\n\n');

const lion = { hasTail: true, legs: 4 };
const eagle = { canFly: true };

const hybrid = { name: 'Griphon', ...lion, ...eagle };

console.log(hybrid);

//log is { name: 'Griphon', hasTail: true, legs: 4, canFly: true }

const todos = [{ completed: true }, { completed: true }];

const addTodo = (newTodo) => {
  [...todos, { ...newTodo, completed: false }];
};

const newTodos = addTodo({ user: 'Name', task: 'Task' });
