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
}, {
  input: 14,
  result: 'XIV'
}, {
  input: 15,
  result: 'XV'
}, {
  input: 16,
  result: 'XVI'
}, {
  input: 17,
  result: 'XVII'
}, {
  input: 18,
  result: 'XVIII'
}, {
  input: 19,
  result: 'XIX'
}, {
  input: 20,
  result: 'XX'
}, {
  input: 30,
  result: 'XXX'
}, {
  input: 31,
  result: 'XXXI'
}, {
  input: 32,
  result: 'XXXII'
}, {
  input: 33,
  result: 'XXXIII'
}, {
  input: 34,
  result: 'XXXIV'
}, {
  input: 35,
  result: 'XXXV'
}, {
  input: 36,
  result: 'XXXVI'
}, {
  input: 37,
  result: 'XXXVII'
}, {
  input: 38,
  result: 'XXXVIII'
}, {
  input: 39,
  result: 'XXXIX'
}, {
  input: 40,
  result: 'XL'
}])('Roman Numerals', ({input, result}) => {
  it(`should return ${result} when given ${input}`, () => {
    // Arrange
    const romanNumerals = new RomanNumerals()
 
    // Act
    const answer = romanNumerals.convert(input)
 
    // Assert
    expect(answer).toBe(result);
  })
})
