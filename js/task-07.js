const fontSize = document.querySelector("#font-size-control");

const textEl = document.getElementById("text");

function handleInput() {
  textEl.style.fontSize = `${fontSize.value}px`;
}
fontSize.addEventListener("input", handleInput);
handleInput();
