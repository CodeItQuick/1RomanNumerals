export class RomanNumerals {
  public convert(num) {
    let result = '';

    let tensPlace = Math.floor(num / 10);
    if (tensPlace >= 1) {
       if (tensPlace >= 2) {
         num -= 20
         result += 'XX'
       } else if (tensPlace >= 1) {
         num -= 10
         result += 'X'
       }
    }
    
    if (num === 9) {
      num -= 9
      result += 'IX'
    }

    if (num >= 5) {
      num -= 5
      result += 'V'
    }

    if (num === 4) {
      num -= 4
      result += 'IV'
    }

    for (let i = 0; i < num; i++) {
      result += 'I';
    }
 
    return result;
  }
}
