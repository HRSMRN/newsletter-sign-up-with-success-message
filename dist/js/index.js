const heroSection = document.querySelector(".hero");
const emailForm = document.querySelector(".email-form");
const emailFormBtn = document.querySelector(".email-form--btn");
const emailInputField = document.querySelector(".email-form--input");
const errorLabel = document.querySelector(".email-form--label-error");
const successSection = document.querySelector(".success");
const dimissBtn = document.querySelector(".success--dismiss-btn");
const emailValue = document.querySelector(".success--email-value");

function setError() {
  emailInputField.classList.add("email-form--input-error");
  emailInputField.classList.remove("email-form--input");
  errorLabel.style.display = "inline";
}

function removeError() {
  emailInputField.classList.remove("email-form--input-error");
  emailInputField.classList.add("email-form--input");
  errorLabel.style.display = "none";
}

successSection.style.display = "none";

emailInputField.addEventListener("input", (e) => {
  // If input is invalid then setError
  if (!emailInputField.checkValidity()) {
    setError();

    // Else no error
  } else {
    removeError();
  }
});

function onSubmit(event) {
  event.preventDefault();

  // If email is valid then go to success section and empty the email value

  if (
    emailInputField.checkValidity() &&
    emailInputField.value !== ""
  ) {
    heroSection.style.display = "none";
    successSection.style.display = "grid";

    emailValue.textContent = emailInputField.value;

    emailInputField.value = "";
  }
}

emailForm.addEventListener("submit", onSubmit);

emailFormBtn.addEventListener("click", onSubmit);

// Stop the error popup from displaying
emailInputField.addEventListener("invalid", (e) => {
  emailInputField.setCustomValidity("");
});

dimissBtn.addEventListener("click", (e) => {
  e.preventDefault();

  heroSection.style.display = "block";
  successSection.style.display = "none";
});
