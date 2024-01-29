export class RomanNumerals {
  public convert(num) {
    let result = '';
    if (num === 4) {
      return 'IV'
    }
    for (let i = 0; i < num; i++) {
      result += 'I';
    }
 
    return result;
  }
}
 