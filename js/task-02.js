const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('ul#ingredients');

const liElements = ingredients.map((ingredient) => {
  
  const elementLi = document.createElement('li');
  elementLi.textContent = ingredient;
  elementLi.classList.add('item');

  return elementLi;
});

console.log(liElements);

ulIngredients.append(...liElements);

