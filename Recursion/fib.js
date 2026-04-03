function fibHelper(num) {
  let fibArr = [0, 1];
  if (num < 2) return fibArr[num];

  function fibHelper(counter) {
    if (counter > num) {
      return;
    }
    let val = fibArr[counter - 1] + fibArr[counter - 2];
    fibArr.push(val);
    fibHelper(counter + 1);
  }

  fibHelper(2);
  return fibArr[num];
}

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
console.log(fib(2)); // 1
console.log(fib(5)); // 5
