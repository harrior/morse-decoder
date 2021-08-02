const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = ''
    for (let i = 0; i < (expr.length / 10); i++) {
        let charBin = expr.slice(i * 10, 10 + i * 10)
        if (charBin === '**********') {
            result += ' '
        }
        else {
            let charMorz = ''
            for (let j = 0; j < 5; j++) {
                let el = charBin.slice(j * 2, j * 2 + 2)
                if (el === '00')
                    continue
                charMorz += el==='10' ? '.' : '-';
            }
            result += MORSE_TABLE[charMorz];
        }
    }
    return result
}

module.exports = {
    decode
}