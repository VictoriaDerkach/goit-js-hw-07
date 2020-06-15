const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.getElementById('ingredients');
const listOfItem = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.innerText = ingredient;
  return item;
});
list.append(...listOfItem);
