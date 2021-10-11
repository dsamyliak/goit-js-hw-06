//---------------------
// HW-6 Task 1

const categoriesList = document.querySelector('ul#categories');
console.log('Number of categories:', categoriesList.children.length);
console.log('');

const h2arrayCategories = document.querySelectorAll('h2');
for (let index = 0; index < h2arrayCategories.length; index++) {
    console.log(`Category: ${h2arrayCategories[index].textContent}`);
    console.log(`Elements: ${categoriesList.children[index].querySelectorAll('li').length}`,);
    if (index < h2arrayCategories.length-1) {
        console.log("");
    };
};

//---------------------