function recursiveRange(num) {
  if (num === 0) return 0;
  return num + (num > 0 ? recursiveRange(num - 1) : recursiveRange(num + 1));
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
console.log(recursiveRange(-4)); // -10
