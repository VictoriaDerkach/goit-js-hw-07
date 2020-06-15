const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.getElementById('ingredients');
ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.innerText = ingredient;
  list.appendChild(item);
});
