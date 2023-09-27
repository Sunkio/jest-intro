const myIsPalindrome = require('./myIsPalindrome')

test('Tacocat returns true', () => {
    expect(myIsPalindrome('Tacocat')).toBe(true)
})

test('Dave returns false', () => {
    expect(myIsPalindrome('Dave')).toBe(false)
})

test('A man, a plan, a canal, Panama returns true', () => {
    expect(myIsPalindrome('A man, a plan, a canal, Panama')).toBe(true)
})
