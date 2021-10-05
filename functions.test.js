const {returnTwo, greeting, add} = require('./functions')

test('returnTwo returns 2', () => {
    expect(returnTwo()).toBe(2)
}) 

test('testing if greeting "James" and "Jill" works', () => {
    expect(greeting('James')).toBe("Hello, James")
    expect(greeting('Jill')).toBe("Hello, Jill")
})

test('see if adding 1 + 2 = 3 and 5 + 9 = 14', () => {
    expect(add(1,2)).toBe(3)
    expect(add(5,9)).toBe(14)
})