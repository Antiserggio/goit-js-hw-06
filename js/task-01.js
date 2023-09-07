const allItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItems.length}`);

allItems.forEach((item) => {
  const allItemsTitle = item.firstElementChild.textContent;
  console.log(`Category: ${allItemsTitle}`);

  const allItemsEl = item.lastElementChild.children;
  console.log(`Elements: ${allItemsEl.length}`);
});
