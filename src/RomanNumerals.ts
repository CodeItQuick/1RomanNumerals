export class RomanNumerals {
    public convert(num) {
        let result = ''

        let array = [
            {
                numeral: 'M',
                value: 1000
            },
            {
                numeral: 'D',
                value: 500
            },
            {
                numeral: 'CD',
                value: 400
            },
            {
                numeral: 'C',
                value: 100
            },
            {
                numeral: 'XC',
                value: 90
            },
            {
                numeral: 'L',
                value: 50
            },
            {
                numeral: 'XL',
                value: 40
            },
            {
                numeral: 'X',
                value: 10
            }
        ]

        array.forEach(({numeral, value}) => {
            while (num >= value) {
                num -= value
                result += numeral
            }
        })

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
