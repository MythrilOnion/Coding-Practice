function isPalindromeRecursive(str) {
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindromeRecursive(str.slice(1, str.length - 1));
}

console.log(isPalindromeRecursive("awesome")); // false
console.log(isPalindromeRecursive("foobar")); // false
console.log(isPalindromeRecursive("tacocat")); // true
