//
// const num = 42;
// let result;

// BAD

// if (num > 20) {
//   result = 'More than 20';
// } else {
//   result = 'Less than 20';
// }

//GOOD

// const result = num > 20 ? 'More than 20' : 'Less than 20';

// console.log(result);

//###############

// let varible;
// let varible2;

//BAD

// if (varible) {
//   varible2 = varible;
// } else {
//   varible2 = 'some value';
// }

//GOOD

// varible2 = varible || 'some value';

//##########
//bad
// let x
// let y
// let z = 42

// Good//

// let x,y,z = 42

//#######

// const names = ['Igor', 'Olga', 'Elena'];

// for (let name of names) {
//   console.log(name);
//   // names in log
// }

// for (index in names) {
//   console.log(index);
//   //index in log
// }
// names.forEach((el, index, array) => {
//   console.log(array);
// // });

// console.log(2 ** 3);
// console.log(2 ** 4);
// console.log(2 ** 5);


const typeOfIndex = function(i){
  if (i >= raspivArr.length){
    newI = i - raspivArr.length
    if (newI >= otlivantArr.length ){
      newI = newI - otlivantArr.length
      if (newI >= ostatokArr.length){
        console.log('error:Index is very big');
      } return { selector: 'ostatok', newIndex: newI}
    } return { selector: 'otlivant', newIndex: newI }
  } return { selector: 'raspiv', newIndex: i }
}
