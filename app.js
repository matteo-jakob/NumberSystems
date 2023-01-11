checkCustom();
var conversionMethod = document.getElementById("conversion");
conversionMethod.addEventListener("change", checkCustom);

function checkCustom() {
  var customNumDiv = document.getElementById("custom-number-div");
  var conversionMethod = document.getElementById("conversion");
  if (conversionMethod.value == "custom") {
    customNumDiv.innerHTML = `
    <input type="number" max="16" id="custom-number" placeholder="custom value" />
    `;
  } else {
    customNumDiv.innerHTML = ``;
  }
}

var form = document.getElementById("form");
form.addEventListener("submit", CalcSubmit);

function CalcSubmit(e) {
  e.preventDefault();
  var number = document.getElementById("number").value;
  var method = document.getElementById("conversion").value;
  if (method == "custom")
    method = document.getElementById("custom-number").value;
  else if (method == "hex") method = 16;
  else if (method == "binary") method = 2;
  else if (method == "octal") method = 8;
  convertFrom10(number, method);
}

function convertFrom10(input, to) {
  let newNumber = "";
  let rest = input;
  while (rest != 0) {
    rest = input % to;
    input -= rest;
    if (to > 10 && rest > 9) {
      rest = numberToLetter(rest);
    }
    newNumber += rest;
    input = Math.floor(input / to);
  }
  if (input < to) {
    if (to > 10 && input > 9) {
      input = numberToLetter(input);
    }
    newNumber += input;
  }
  newNumber = reverseString(newNumber, to);
  var resArea = document.getElementById("calc-result");
  resArea.innerHTML = newNumber;
}

function numberToLetter(value) {
  if (value == 10) {
    value = "A";
  }
  if (value == 11) {
    value = "B";
  }
  if (value == 12) {
    value = "C";
  }
  if (value == 13) {
    value = "D";
  }
  if (value == 14) {
    value = "E";
  }
  if (value == 15) {
    value = "F";
  }
  return value;
}

function reverseString(str, to) {
  var splitString = str.split("");
  var reverseString = splitString.reverse();
  if (to > 10 && to % 2 == 0) {
    reverseString.splice(0, 2);
  }
  var reverseString = reverseString.join("");
  return reverseString;
}
