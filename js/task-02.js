const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulIngredients = document.querySelector('ul#ingredients');

for (const iterator of ingredients) {
  const elementLi = document.createElement('li');
  elementLi.textContent = iterator;
  elementLi.classList.add('item');
  ulIngredients.append(elementLi);
  console.log(elementLi);
};

console.log(ulIngredients);