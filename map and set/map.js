const entries = [['name', 'vladilern'], ['age', 25], ['job', 'developer']];

//console.log(Object.fromEntries(entries));

// const obj = Object.fromEntries(entries);

const map = new Map(entries);

// map.set('new fied', 42).set(obj, 'VAlue of objecet');

// console.log(map);

// console.log(map.delete('job'));
// console.log(map.has('job'));

// console.log(map.size);

// console.log(map.clear());

// console.log(map.size);

// =========

for (let entry of map.entries()) {
  console.log(entry);
}

// log is
// [ 'name', 'vladilern' ]
// [ 'age', 25 ]
// [ 'job', 'developer' ]

for (let [key, value] of map) {
  console.log(key, value);
}

//log is name vladilern  age 25 job developer

for (let val of map.values()) {
  console.log(val);
}
