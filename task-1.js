const categories = document.getElementsByClassName('item');
const categoriesCount = categories.length;
console.log(`В списке ${categoriesCount} категории.`);

for (let i = 0; i < categoriesCount; i++) {
  let category = categories[i];
  let categoryName = category.getElementsByTagName('h2')[0].innerText;
  let subCategoriesCount = category.getElementsByTagName('li').length;
  console.log(`Категория: ${categoryName}`);
  console.log(`Количество элементов: ${subCategoriesCount}`);
}
