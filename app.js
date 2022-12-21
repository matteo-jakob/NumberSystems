function transformFrom10(input, to) {
  let newNumber = "";
  let rest = input;
  while (rest != 0) {
    rest = input % to;
    newNumber = rest + newNumber;
    input = Math.floor(input / to);
  }
  return newNumber;
}
