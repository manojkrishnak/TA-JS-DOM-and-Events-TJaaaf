let form = document.querySelector("form");

function elmCharsLength(chars) {
  return chars.length;
}

function minCharsError(elm, char) {
  return `${elm} can't be less than ${char} chars`;
}

function nameHasNoNumbers(name) {
  return name.split("").some((v) => Number(v));
}

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function isAValidPhoneNumber(number) {
  return isNaN(number);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let elm = e.target.elements;
  let uname = elm.uname;
  let name = elm.name;
  let email = elm.email;
  let number = elm.number;
  let password = elm.pwd;
  let cnfPassword = elm.cnfPwd;

  let errorMessage = "";

  /*

Username can't be less than 4 characters
Name can't be numbers
Email must contain the symbol @
Email must be at least 6 characters
Phone numbers can only be a number
Length of phone number can't be less than 7
Password and confirm password must be same.
    */
  if (elmCharsLength(uname.value) < 4) {
    errorMessage = minCharsError("username", 4);
    uname.nextElementSibling.innerText = errorMessage;
    uname.classList.add("error");
  } else {
    uname.nextElementSibling.innerText = "";
    uname.classList.remove("error");
  }

  if (nameHasNoNumbers(name.value)) {
    errorMessage = "You can't use number in the name field";
    name.nextElementSibling.innerText = errorMessage;
    name.classList.add("error");
  } else {
    errorMessage = "";
    name.nextElementSibling.innerText = errorMessage;
    name.classList.remove("error");
  }

  if (!(validateEmail(email.value) && elmCharsLength(email.value) > 6)) {
    errorMessage = "Not a valid email";
    email.nextElementSibling.innerText = errorMessage;
    email.classList.add("error");
  } else {
    errorMessage = "";
    email.nextElementSibling.innerText = errorMessage;
    email.classList.remove("error");
  }

  if (!(elmCharsLength(number.value) >= 7 && !isAValidPhoneNumber(number.value))) {
    errorMessage = "Not a valid phone number";
    number.nextElementSibling.innerText = errorMessage;
    number.classList.add("error");
  } else {
    errorMessage = "";
    number.nextElementSibling.innerText = errorMessage;
    number.classList.remove("error");
  }

  if (password.value !== cnfPassword.value) {
    errorMessage = "Password and confirm password are not same";
    password.nextElementSibling.innerText = errorMessage;
    password.classList.add("error");
  } else {
    errorMessage = "";
    password.nextElementSibling.innerText = errorMessage;
    password.classList.remove("error");
  }
});
