import {
  RomanNumerals
} from './RomanNumerals'
 
describe.each([{
  input: 1,
  result: 'I'
}, {
  input: 2,
  result: 'II'
}, {
  input: 3,
  result: 'III'
}, {
  input: 4,
  result: 'IV'
}, {
  input: 5,
  result: 'V'
}, {
  input: 6,
  result: 'VI'
}, {
  input: 7,
  result: 'VII'
}, {
  input: 8,
  result: 'VIII'
}, {
  input: 9,
  result: 'IX'
}, {
  input: 10,
  result: 'X'
}, {
  input: 11,
  result: 'XI'
}, {
  input: 12,
  result: 'XII'
}, {
  input: 13,
  result: 'XIII'
}


])('Roman Numerals', ({input, result}) => {
  it(`should return ${result} when given ${input}`, () => {
    // Arrange
    const romanNumerals = new RomanNumerals()
 
    // Act
    const answer = romanNumerals.convert(input)
 
    // Assert
    expect(answer).toBe(result);
  })
})
