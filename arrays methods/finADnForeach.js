const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 12 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 }
];

const foundItem = items.filter((item) => {
  return item.price <= 100;
});

foundItem.forEach((fItems) => {
  console.log(fItems.name);
});
