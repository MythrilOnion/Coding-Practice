function findAllDuplicates(arr){
    const seen = {}
    const result = []

    for ( let i = 0; i < arr.length; i++) {
        if(seen[arr[i]]) {
            result.push(arr[i])
        } else {
            seen[arr[i]] = true
        }
    }

    return result
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1])) // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])) // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // array with 3, 2, and 1