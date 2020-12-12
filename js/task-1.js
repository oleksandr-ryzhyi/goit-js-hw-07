const li = document.querySelectorAll('li.item');
    
console.log(`В списке ${li.length} категории.`);

li.forEach(function (categoryItem) {
  console.log(`Категория: ${categoryItem.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${categoryItem.querySelectorAll('li').length}`)
})