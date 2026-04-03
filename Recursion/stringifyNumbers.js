function stringifyNumbers(obj) {
  let newObject = JSON.parse(JSON.stringify(obj));
  for (let key in obj) {
    let value = obj[key];
    switch (typeof value) {
      case "number":
        newObject[key] = value.toString();
        break;
      case "object":
        newObject[key] = stringifyNumbers(value);
        break;
    }
  }

  return newObject;
}

let obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj1));
console.log(obj1);
