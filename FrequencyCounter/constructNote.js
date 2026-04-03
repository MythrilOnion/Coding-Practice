function constructNote(message, letters) {
    if(message.length > letters) return false

    let seenLetters = {}

    for(let i = 0; i < letters.length; i++) {
        if(seenLetters[letters[i]]) {
            seenLetters[letters[i]]++
        } else {
            seenLetters[letters[i]] = 1
        }
    }

    for(let i = 0; i < message.length; i++) {
        if(!seenLetters[message[i]]) return false

        seenLetters[message[i]]--
    }

    return true
}

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true
console.log(constructNote('', 'abcabc')) // true
console.log(constructNote('aabbcc', '')) // false
console.log(constructNote('', '')) // true