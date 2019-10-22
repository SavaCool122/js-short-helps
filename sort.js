
// --- Sort ---

// массив для сортировки
var listNumber = [7, 40, 5, 12, 300];
var list = ['Дельта', 'альфа', 'ЧАРЛИ', 'браво'];

// --- Sort for numbers

let mySortedFunction = (item) => item.sort((a, b) => a.year - b.year);

var cars = [
  { type: 'Volvo', year: 2316 },
  { type: 'Volvo', year: 5316 },
  { type: 'Saab', year: 203 },
  { type: 'Saab', year: 800 },
  { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 }
];

//console.log(mySortedFunction(cars));

// --- Sort For Text
const sortWords = (arr) => {
  mapped = arr.map((el, i) => {
    return { index: i, value: el.toLowerCase() };
  });

  // сортируем массив with index
  mapped.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  return (result = mapped.map(function(el) {
    return list[el.index];
  }));
};

// ---Bubble sort

bubbleSort = (array) => {
  let swapped = false;
  do {
    swapped = false;
    array.forEach((current, i) => {
      console.log(array.join(' '));
      if (current > array[i + 1]) {
        const temp = current;
        console.log(array.join(' '));

        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    });
  } while (swapped);
  console.log(array.join(' '));
  return array;
};

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];

// --- divide

divide = (array) => {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const smallOne = array.slice(0, mid);
  const smallTwo = array.slice(mid);
  return sort(divide(smallOne), divide(smallTwo));
};

sort = (smallOne, smallTwo) => {
  const sorted = [];
  while (smallOne.length && smallTwo.length) {
    if (smallOne[0] <= smallTwo[0]) {
      sorted.push(smallOne.shift());
    } else {
      sorted.push(smallTwo.shift());
    }
  }
  const output = [...sorted, ...smallOne, ...smallTwo];
  console.log(output);
  return output;
};

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
console.log(divide(numbers));


// ---- Insert sort

insertionSort = (array) => {
  for (outer = 1; outer < array.length; outer++) {
    for (inner = 0; inner < outer; inner++) {
      console.log(array.join(' '));
      if (array[outer] < array[inner]) {
        const [element] = array.splice(outer, 1);
        array.splice(inner, 0, element);
      }
    }
  }
  console.log(array.join(' '));
  return array;
};
const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
insertionSort(numbers);
console.log(insertionSort(numbers));

// --- quiq sort ---

quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const chosenIndex = array.length - 1;
  const chosen = array[chosenIndex];
  const a = [];
  const b = [];
  for (let i = 0; i < chosenIndex; i++) {
    const temp = array[i];
    temp < chosen ? a.push(temp) : b.push(temp);
  }

  const output = [...quickSort(a), chosen, ...quickSort(b)];
  console.log(output.join(' '));
  return output;
};
const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
quickSort(numbers);
console.log(quickSort(numbers));
