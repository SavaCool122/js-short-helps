// ---- Chunk ----

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

let concat = (arr, val) => {
  return (result = [...arr, val]);
};

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

// --- DropRight ---

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

// ---- Join -----

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

// --- baseSlice ---

function baseSlice(array, start, end) {
  var index = -1,
    length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : (end - start) >>> 0;
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

// --- Take -----

let _take = (array, n) => {
  if (!(array && array.length)) {
    return [];
  }
  return baseSlice(array, 0, n < 0 ? 0 : n);
};

// --- Take right ---

let _takeRight = (arr, n) => {
  if (!(arr && arr.length)) {
    return [];
  }
  n = arr.length - n;
  return baseSlice(arr, n < 0 ? 0 : n, arr.length);
};

