function naiveStringSearch(str, substr) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === substr[0]) {
      let j = 1;
      while (j < substr.length) {
        if (substr[j] !== str[i + j]) {
          break;
        }
        j++;
      }
      if (j === substr.length) {
        counter++;
      }
    }
  }

  return counter;
}

let str = "wowomgzomgsoromgj";
let substr = "omg";
console.log(naiveStringSearch(str, substr)); // 3
