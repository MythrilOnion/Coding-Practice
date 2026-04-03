// space O(n) time O(n)
function findPair(arr, n) {
    let seen = {}
    let isFoundPair = false

    arr.forEach((num) => {
        let sum = n + num
        let difference = num - n
        if(seen[sum]) isFoundPair = true
        if(seen[difference]) isFoundPair = true
        seen[num] = (seen[num] || 0) + 1
    })

    return isFoundPair
}

// space O(1) time O(n log n)
function findPairTwo(arr, num) {
    let sortedArr = arr.sort((a, b) => a - b)

    let leftPointer = 0
    let rightPointer = 1

    while(leftPointer < arr.length && rightPointer < arr.length) {
        if(leftPointer !== rightPointer && Math.abs(sortedArr[rightPointer] - sortedArr[leftPointer]) === Math.abs(num)) {
            return true
        } else if (sortedArr[rightPointer] - sortedArr[leftPointer] < num) {
            rightPointer++
        } else {
            leftPointer++
        }
    }

    return false
}

console.log(findPair([1, 2, 4, 4, 6, 10], 2)) // true
console.log(findPair([8,6,2,4,1,0,2,5,13],1)) // true
console.log(findPair([4,-2,3,10],-6)) // true
console.log(findPair([6,1,4,10,2,4], 22)) // false
console.log(findPair([], 0)) // false
console.log(findPair([5,5], 0)) // true
console.log(findPair([-4,4], -8)) // true
console.log(findPair([-4,4], 8)) // true
console.log(findPair([1,3,4,6],-2)) // true
console.log(findPair([0,1,3,4,6],-2)) // true
console.log(findPair([1,2,3], 0)) // false