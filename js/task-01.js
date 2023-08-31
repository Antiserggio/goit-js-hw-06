const allItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItems.length}`);

allItems.forEach((element) => {
  const allItemsTitle = element.querySelector("h2").textContent;
  console.log(`Category: ${allItemsTitle}`);

  const allItemsEl = element.querySelectorAll("li");
  console.log(`Elements: ${allItemsEl.length}`);
});
