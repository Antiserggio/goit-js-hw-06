function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
console.log(btnEl);

btnEl.addEventListener("click", changeBackgroundColor);

const bgColorSpan = document.querySelector(".color");
console.log(bgColorSpan);

const body = document.body;
console.log(body);

function changeBackgroundColor(event) {
  const color = getRandomHexColor();
  console.log(event.currentTarget.value);
  body.style.backgroundColor = color;
  bgColorSpan.textContent = color;
}
