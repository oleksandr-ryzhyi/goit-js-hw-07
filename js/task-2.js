const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsItem = ingredients.forEach((elm) => {
    const element = document.createElement('li');
        element.textContent = elm;
    ingredientsList.append(element)
})
console.log (ingredientsList)