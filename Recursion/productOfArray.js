// this mutates the array
function productOfArrayMutate(arr) {
  if (arr.length === 0) return 1;
  let popped = arr.pop();

  return popped * productOfArray(arr);
}

// this does not mutate the array
function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
