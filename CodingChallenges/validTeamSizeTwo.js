function validTeamSizeTwo(talents, talentCount) {
    let result = Array(talents.length).fill(-1)

    let seen = {}
    let totalSeen = 0
    let leftPointer = 0;
    let rightPointer = 0

    while (leftPointer < result.length - talentCount + 1) {
        while(totalSeen < talentCount && rightPointer < result.length) {
            let rightTalent = talents[rightPointer]

            if(rightTalent <= talentCount) {
                if(seen[rightTalent] === undefined) {
                    totalSeen++
                }

                seen[rightTalent] = rightPointer
            }

            rightPointer++
        }

        let length = rightPointer <= result.length ? rightPointer - leftPointer : -1
        result[leftPointer] = length

        let leftTalent = talents[leftPointer]
        if(seen[leftTalent] <= leftPointer) {
            seen[leftTalent] = undefined
            totalSeen--
        }

        leftPointer++
    }

    return result
}

console.log(validTeamSize([1, 2, 3, 4, 5, 4, 3, 2, 1], 3)) // [3, 8, 7, 6, 5, 4, 3, -1, -1]