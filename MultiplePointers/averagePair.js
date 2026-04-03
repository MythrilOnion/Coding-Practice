function averagePair(arr, target) {
    if(arr.length < 2 || target === 0) return false
    let leftPointer = 0
    let rightPointer = arr.length - 1

    while(leftPointer < rightPointer) {
        let average = (arr[leftPointer] + arr[rightPointer]) / 2

        if(average === target) return true
        if(average > target) rightPointer--
        if(average < target) leftPointer++
    }

    return false
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false