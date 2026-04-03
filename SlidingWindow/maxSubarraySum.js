function maxSubarraySum(arr, num) {
    if(arr.length < num) return null

    let max = -Infinity
    let runningTotal = 0

    for(let i = 0; i < num; i++) {
        runningTotal = runningTotal + arr[i]
    }

    max = runningTotal

    let leftFrame = 1

    while(leftFrame < arr.length - num) {
        let rightFrame = leftFrame + num - 1

        runningTotal = runningTotal + arr[rightFrame] - arr[leftFrame-1]
        max = Math.max(runningTotal, max)
        leftFrame++
    }
    
    return max
}


let exampleArr = [2, 6, 9, 2, 1, 8, 5, 6, 3]
let exampleNum = 3

//expect 19
console.log(maxSubarraySum(exampleArr, exampleNum))