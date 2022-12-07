console.log('Hello')

var isPalindrome = function(x) {
    const stringX = String(x)
    const reverse = [...stringX].reverse().join('')
    console.log('reverse>>>', reverse)
    if (stringX === reverse) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome(121))