const isPalindrome = (str: string): boolean => {
    const regex = /\W/gi;
    let sanitizedStr = str.replaceAll(regex, '').toLowerCase()

    if(!sanitizedStr) {
        return true
    }

    let i = 0
    let j = sanitizedStr.length - 1

    while(i <= j) {
        if(sanitizedStr[i] !== sanitizedStr[j]) {
            return false
        }

        i++
        j--
    }

    return true
}

let str = "I saw desserts, I'd no lemons. Alas, no melon distressed was I!"

console.log(isPalindrome(str))