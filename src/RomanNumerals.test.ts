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
}])('Roman Numerals', ({input, result}) => {
  it('should return I when given 1', () => {
    // Arrange
    const romanNumerals = new RomanNumerals()
 
    // Act
    const answer = romanNumerals.convert(input)
 
    // Assert
    expect(answer).toBe(result);
  })
 
  it('should return II when given 2', () => {
    // Arrange
    const romanNumerals = new RomanNumerals()
 
    // Act
    const answer = romanNumerals.convert(2)
 
    // Assert
    expect(answer).toBe('II')
  })
})