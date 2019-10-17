// ---- Chunk ----

// let latters = ['a', 'b', 'c', false, 'd', 'g', 'k'];

let _chunk = (arr, size) => {
  let chunk = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (chunk.length === size) {
      result.push(chunk);
      chunk = [];
      chunk.push(element);
      result.push(chunk);
    } else chunk.push(element);
  }
  return result;
};

// let resChunk = _chunk(latters, 3);

// console.log(resChunk);

// --- Compact ----

function compact(arr) {
  let i = -1,
    length = arr == null ? 0 : arr.length;
  (resIndex = 0), (result = []);

  while (++i < length) {
    let element = arr[i];
    if (element) {
      result[resIndex++] = element;
    }
  }
  return result;
}

// console.log(compact(latters));

let concat = (arr, val) => {
  return (result = [...arr, val]);
};

// let num = ['1'];
// let other = concat(num, '2131', 3, [4]);

// console.log(other);

// ---- Drop ----

let drop = (arr, n) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el !== n) {
      result.push(el);
    }
  }
  return result;
};

// let arrOfNum = [1, 2, 3, 4];

// let res = drop(arrOfNum, 2);

// console.log(res);

// --- DropRight ---

// let arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let dropRight = (arr, n) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el !== n) {
      result.push(el);
    } else {
      return result;
    }
  }
};

// let res = dropRight(arrOfNum, 7);

// console.log(res);

// ---- Join -----

let arrOfLeter = ['a', 'b', 'a', 'c', 'g'];

let _join = (arr, sep) => {
  let result = '';
  for (i in arr) {
    const el = arr[i];
    if (i == 0) {
      result += el;
    } else {
      resArr = `${sep}${el}`;
      result += resArr;
    }
  }
  return result;
};

// let res = _join(arrOfLeter, '~');

// console.log(res);

// --- pullAll (not ready)----

// var array = ['a', 'b', 'c', 'a', 'b', 'c'];

// const _pullAll = (arr, elArr) => {
//   let result = [];
//   for (index in elArr) {
//     drop(arr, elArr[index]);
//     console.log(newArr);
//   }

//   return result;
// };

// res = _pullAll(array, ['a', 'c']);

// console.log(res);


