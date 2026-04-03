function threeNonOverlappingIntervals(starting, ending) {}

// given an array of numbers for starting and ending, which for a pair of intervals
// return how many total configurations of non-overlapping groups of three buildings
// you can make with those intervals

let starting = [1, 2, 4, 3, 7];
let ending = [3, 4, 6, 5, 8];

console.log(threeNonOverlappingIntervals(starting, ending)); // 1; [1,3], [2,4], [7, 8]
