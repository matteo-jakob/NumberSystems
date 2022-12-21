checkCustom();
var conversionMethod = document.getElementById("conversion");
conversionMethod.addEventListener("change", checkCustom);

function checkCustom() {
  var customNum = document.getElementById("custom-number");
  var conversionMethod = document.getElementById("conversion");
  if (conversionMethod.value == "custom") {
    customNum.style.visibility = "visible";
  } else {
    customNum.style.visibility = "hidden";
  }
}
function CalcSubmit() {
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
