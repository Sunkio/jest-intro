const reverseString = require('./reverseString');

function hello() {
    console.log('hello');
}

function isPalindrome(word) {
    return word.toLowerCase() === reverseString(word).toLowerCase()
}

module.exports = isPalindrome;