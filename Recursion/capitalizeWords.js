function capitalizeWords(strArr) {
  if (strArr.length === 1) {
    return [strArr[0].toUpperCase()];
  }

  return [].concat(strArr[0].toUpperCase(), capitalizeWords(strArr.slice(1)));
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
