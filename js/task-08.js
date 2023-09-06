const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  const info = {
    email: email.value,
    password: password.value,
  };

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Заповніть всі поля!");
  }

  console.log(info);
  event.currentTarget.reset();
}
