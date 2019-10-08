const items = [
  { name: 'Book', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Book', price: 10 },
  { name: 'Book', price: 12 },
  { name: 'Phone', price: 500 },
  { name: 'TV', price: 1000 },
  { name: 'TV', price: 25 }
];

// --- Find Unic values -----

unicValues = [];

items.forEach((unicitem) => {
  unicValues.push(unicitem.name);
});

let unique = [...new Set(unicValues)];

// --- Culc sum of prices -----

for (let unicName of unique) {
  console.log(unicName);
  const filterItems = items.filter((item) => {
    return item.name === unicName;
  });

  const total = filterItems.reduce((curretnTotal, item) => {
    return item.price + curretnTotal;
  }, 0);

  console.log(total);
}
