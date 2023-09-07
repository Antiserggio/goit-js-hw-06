const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
  output.textContent = event.currentTarget.value.trim() || "Anonimus";
}

//---------------var2----------------------//
// function handleInput(event) {
//   output.textContent = event.currentTarget.value.trim();
//   event.currentTarget.value.trim() !== ""
//     ? output.textContent === event.currentTarget.value.trim()
//     : (output.textContent = "Anonimus");
// }
