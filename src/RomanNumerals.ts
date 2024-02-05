export class RomanNumerals {
    public convert(num) {
        let result = ''

        if (num >= 90) {
            num -= 90
            result += 'XC'
        }

        if (num >= 50) {
            num -= 50
            result += 'L'
        }
        
        if (num >= 40) {
            num -= 40
            result += 'XL'
        }
        
        let tensPlace = Math.floor(num / 10)
        
        for (let i = 0; i < tensPlace; i++) {
            num -= 10
            result += 'X'
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
