function helperPower(base, exponent) {
  let recursivePower = (total, exponent) => {
    if (exponent === 0) return 1;
    if (exponent === 1) return total;

    return recursivePower(total * base, exponent - 1);
  };

  return recursivePower(base, exponent);
}

function power(base, exponent) {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
