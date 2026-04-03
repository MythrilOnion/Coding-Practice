// helper recursion
function capitalizeFirstHelper(strArr) {
  let result = [];

  const capitalize = (strArr) => {
    result.push(`${strArr[0][0].toUpperCase()}${strArr[0].slice(1)}`);
    if (strArr.length > 1) {
      capitalize(strArr.slice(1));
    }
  };

  capitalize(strArr);
  return result;
}

// pure recursion. I like helper more, here. It's cleaner
function capitalizeFirst(strArr) {
  if (strArr.length === 1) {
    return [`${strArr[0][0].toUpperCase()}${strArr[0].slice(1)}`];
  }

  let finalArr = capitalizeFirst(strArr.slice(0, -1));
  let word = strArr.slice(strArr.length - 1)[0];
  finalArr.push(word[0].toUpperCase() + word.slice(1));
  return finalArr;
}

console.log(
  capitalizeFirst(["butts", "more butts, perhaps", "and then a third butt"]),
);
