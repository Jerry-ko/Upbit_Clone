/**
 * 숫자 포맷 함수
 *
 * @param {number} number
 * @param {number} digit
 * @param {boolean} isDown
 * @returns
 */
export function format(number, digit, isDown = false) {
    if (isDown) {
        let RegExpresion = new RegExp('(\\d+\\.\\d{' + digit + '})(\\d)');
        let RegExpMatcher = number.toString().match(RegExpresion);
        return RegExpMatcher ? parseFloat(RegExpMatcher[1]) : number.valueOf();
    } else {
        return number.toLocaleString(undefined, {
            maximumFractionDigits: digit || 0,
        });
    }
}
