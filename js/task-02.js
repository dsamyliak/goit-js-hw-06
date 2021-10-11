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
  elementLi.classList.add('item');
  elementLi.textContent = iterator;
  ulIngredients.append(elementLi);
};

console.log(ulIngredients);