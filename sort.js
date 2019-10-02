// массив для сортировки
var list = ['Дельта', 'альфа', 'ЧАРЛИ', 'браво'];

// временный массив содержит объекты с позицией и значением сортировки
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
});

// сортируем массив, содержащий уменьшенные значения
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// контейнер для результа
var result = mapped.map(function(el) {
  return list[el.index];
});

console.log(result);

// массив для сортировки
var list = [7, 40, 300];

// временный массив содержит объекты с позицией и значением сортировки
var mapped = list.map(function(el, i) {
  return { index: i, value: el };
});

// сортируем массив, содержащий уменьшенные значения
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// контейнер для результа
var result = mapped.map(function(el) {
  return list[el.index];
});

console.log(result);

// WAy to sort objects 

var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars();

function myFunction() {
  cars.sort(function(a, b){return a.year - b.year});
  displayCars();
}
