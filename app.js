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
  if (method == "custom") {
    method = document.getElementById("custom-number").value;
  }
  convertFrom10(number, method);
}

function convertFrom10(input, to) {
  let newNumber = "";
  let rest = input;
  while (rest != 0) {
    rest = input % to;
    newNumber = rest + newNumber;
    input = Math.floor(input / to);
  }
  return newNumber;
}
