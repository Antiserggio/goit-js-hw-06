const fontSize = document.querySelector("#font-size-control");
fontSize.addEventListener("input", handleInput);

const textEl = document.getElementById("text");

function handleInput(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
