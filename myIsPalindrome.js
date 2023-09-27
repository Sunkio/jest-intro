function myIsPalindrome(phrase) {
    const testPhrase = phrase.toLowerCase().replaceAll(',', '').replaceAll(' ', '');
    return testPhrase === testPhrase.split("").reverse().join("");
}

module.exports = myIsPalindrome;
