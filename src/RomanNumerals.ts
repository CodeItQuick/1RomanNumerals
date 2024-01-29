export class RomanNumerals {
  public convert(num) {
    let result = '';

    if (num === 4) {
      return 'IV'
    }
    if (num === 9) {
      return 'IX'
    }

    if (num >= 10) {
      num -= 10
      result += 'X'
    } else if (num >= 5) {
      num -= 5
      result += 'V'
    }

    for (let i = 0; i < num; i++) {
      result += 'I';
    }
 
    return result;
  }
}
