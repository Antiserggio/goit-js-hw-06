const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const ingredientsEl = ingredients.map((ingredient) => {
  console.log(ingredient);
  const itemEL = document.createElement("li");
  itemEL.textContent = ingredient;
  itemEL.classList.add("item");

  return itemEL;
});
console.log(ingredientsEl);
ingredientsList.append(...ingredientsEl);
console.log(ingredientsList);
