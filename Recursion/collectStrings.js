function collectStrings(obj) {
  let result = [];

  for (let key in obj) {
    let value = obj[key];
    switch (typeof value) {
      case "string":
        result.push(value);
        break;
      case "object":
        result = result.concat(collectStrings(value));
        break;
    }
  }

  return result;
}

const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj1));
