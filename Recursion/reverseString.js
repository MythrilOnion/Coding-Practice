function reverseString(str) {
  if (str.length === 1) return str;
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

console.log(reverseString("awesome")); // "emosewa"
console.log(reverseString("rithmschool")); // loohcsmhtir
