
const { palindrome } = require ('../Dia_dos_test/utility')
test('palindrome of midudev', () => {
    const result = palindrome('midudev')

    expect(result).toBe('vedudim')
})