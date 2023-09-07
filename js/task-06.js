const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleBlur);

function handleBlur() {
  const inputDataSetLength = Number(input.getAttribute("data-length"));

  const inputValueLength = input.value.trim().length;

  if (inputDataSetLength === inputValueLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
