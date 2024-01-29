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