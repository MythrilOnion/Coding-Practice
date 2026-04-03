function isSubsequence(str1, str2) {
    if(str1.length > str2.length) return false

    let str1Pointer = 0
    let str2Pointer = 0

    while(str1Pointer < str1.length) {
        if(str2Pointer === str2.length) return false

        let str1Char = str1[str1Pointer]
        let str2Char = str2[str2Pointer]

        if(str1Char === str2Char) {
            str1Pointer++
            str2Pointer++
        } else {
            str2Pointer++
        }
    }

    return true
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)