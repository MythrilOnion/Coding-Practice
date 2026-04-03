const validTeamSize = (talents, talentCount) => {
  let countObj = {};
  let result = [];

  // iterate through numbers up to talent count
  // and create an object with pointer and indices for each number
  for (let i = 1; i <= talentCount; i++) {
    countObj[i] = {
      pointer: 0,
      indices: [],
    };
  }

  // iterate through talents and push the index of each number into the countObj
  for (let i = 0; i < talents.length; i++) {
    if (talents[i] <= talentCount) {
      countObj[talents[i]].indices.push(i);
    }
  }

  let shouldLoop = true;

  // result length will be the same length as the talents length
  // once we hit this length, we should return the results array
  while (result.length < talents.length) {
    // keep track of the largest index amongst talents
    let largest = -1;

    // iterate through each value in the countObj
    if (shouldLoop) {
      for (const entry of Object.values(countObj)) {
        // while the index at the pointer is < the result.length (our current index location in talents)
        // and pointer is less than the entry.indices.length, we should increase the pointer
        while (
          entry.pointer < entry.indices.length &&
          entry.indices[entry.pointer] < result.length
        ) {
          entry.pointer++;
        }

        // if we go outside of the indices array, we no longer have a valid length
        // and should return -1 for all remaining entries
        if (entry.pointer >= entry.indices.length) {
          largest = -1;
          shouldLoop = false;
          break;
        }

        // find what the current index is within the indices
        const currentIndex = entry.indices[entry.pointer];

        // if the current index is larger than the largest, reassign the largest
        if (currentIndex > largest) {
          largest = currentIndex;
        }
      }
    }

    // if largest is still -1 at this point, push -1
    // else, push talentLength
    if (largest === -1) {
      result.push(-1);
    } else {
      let talentLength = largest - result.length + 1;
      result.push(talentLength);
    }
  }

  return result;
};

let talents = [1, 2, 3, 4, 3, 2, 1];

let talentCount = 4;

console.log(validTeamSize(talents, talentCount));
