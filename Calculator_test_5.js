/* eslint-disable func-names, class-methods-use-this */
class Calculator {
  evaluate(string) {
    let firstOps;
    let str = string.replace(/ /g, '');
    let firstMatch;
    const regExpPiece = '\\d+(\\.)?(\\d+)?(e(\\-|\\+)\\d+)?';

    const calculate = (operation) => {
      firstMatch = str.match(new RegExp(`${regExpPiece}(\\${operation})${regExpPiece}`));
      firstOps = firstMatch[0]
        .match(new RegExp(regExpPiece, 'g'))
        .reduce((acc, cur) => ((operation === '/') ? (+acc) / (+cur) : (+acc) * (+cur)));
      str = str.replace(firstMatch[0], firstOps);
    };

    // do all multiplications and divisions
    do {
      if (/\d+(\/)\d+/.test(str)) { calculate('/'); } else if (/\d+(\*)\d+/.test(str)) { calculate('*'); }
    } while (/\d+(\/)\d+/.test(str) || /\d+(\*)\d+/.test(str));

    // do all additions and subtractions
    const result = str
      .split('+')
      .map(val => (
        val
          .split('-')
          .reduce((acc, cur, ind, arr) => {
            if (/e/.test(cur)) return acc - (+`${cur}-${arr[ind + 1]}`);
            if (/e/.test(arr[ind - 1])) {
              if (ind === 1) return `${acc}-${cur}`;
              return acc;
            } return +acc - +cur;
          })
      ))
      .reduce((acc, cur) => acc + +cur, 0);
    return result;
  }
}

const calculate = new Calculator();
// calculate.evaluate('2 / 2 + 3 * 4 - 6');
// // calculate.evaluate('2 * 2 + 3 * 4 - 6');
// // calculate.evaluate('10 + 5 / 2');
// // calculate.evaluate('10 + 1 - 5  / 2');
// // calculate.evaluate('10 * 5 / 2');
// calculate.evaluate('2 - 3 - 4');
// calculate.evaluate('2 + 3');
// calculate.evaluate('93 + 32 * 48 / 48 * 4 * 69 + 1 * 66 / 83 + 6 * 45 + 54 * 57 - 46 * 77 / 37 / 49 + 65 - 61 * 59 + 13 * 9 * 72 + 74 - 86 - 17 * 70 - 73 * 44 - 94 / 47 - 6 - 45 + 85 * 31 - 61 - 93 + 63 - 50 + 78 - 67 + 36 * 63 * 98 / 1 + 98 + 4 * 61 / 56 + 32 / 13 / 33 / 7 * 77 + 82 - 75 - 47 / 3 - 39 + 69 * 98 * 82 / 94 - 1 * 19 + 62 * 24 + 27 * 20 - 87 + 21 / 23 + 89 - 56 * 91 * 38 + 31 + 12 - 77 + 55 * 64 * 70 + 3 - 29 / 23 / 47 * 50 * 34 + 89');
// calculate.evaluate('42 + 4 - 74 + 1 / 27 / 28 / 93 / 88 * 61 * 7 / 14 * 40 + 81 + 34 / 86 + 95 - 30 + 95 * 10 * 92 - 88 / 69 / 69 * 84 + 25 * 59 / 14 - 54 / 82 + 31 / 1 / 23 / 82 + 69 + 58 + 7 - 55 / 9 / 36 * 50 + 79 - 53 * 69 / 54');
// calculate.evaluate('4 * 95 * 52 + 99 + 61 - 53 / 36 - 97 - 77 + 93 / 53 + 16 * 1 * 57 / 79 * 58 - 24 + 53 + 68 / 57 + 67 / 99 / 25 / 4 / 29 / 56 / 40 + 66 + 92 + 92 * 61 * 73 * 10 / 60 + 8 + 49 - 34 / 49 + 44 / 99 / 23 + 36');
// 88975.7038770262
// calculate.evaluate('22 + 56 - 63 / 69 / 5 * 50 - 31 * 66 / 45 - 95 / 80 + 72 * 80 / 91 * 79 + 35 + 40 / 10 / 48 * 51 + 33 - 45 / 26 / 89 + 13 * 77 / 40 + 45 - 54 + 77 / 98 - 27 * 41 * 97 - 54 / 64 / 27 * 25 - 15 / 9 - 56 - 83 - 90');
// calculate.evaluate('94 - 78 / 90 * 59 * 93 - 57 * 51 + 49 - 59 + 96 / 52 + 60 + 10 - 21 * 23 + 20 / 63 + 28 / 54 - 83 + 4 + 61 - 49 + 74 + 78 * 12 + 60 * 16 * 62 / 78 - 3 * 23 + 43 / 13 - 55 / 12 - 2 / 41 / 67 / 22 / 35 - 43 * 76 - 44 - 27 / 54 * 71 - 53 / 19 - 82 + 70 + 69 * 54 / 65 - 1 - 85 / 75 * 26 - 15 / 4 * 2 * 86 - 70');
// -10403.349649639926;
calculate.evaluate('80 / 75 / 60 / 40 / 58 / 20 / 86 * 89 / 11 * 63 - 33 - 19 * 79 * 67 / 71 / 15 / 52 * 43 + 39 - 71 - 63 / 3 + 56 - 48 * 74 + 74 / 96 + 88 / 17 * 8 - 79 / 8 * 55 * 41 * 69 + 83 / 71 * 66 - 43 / 42 * 38 - 67 / 85 + 93 - 46 - 84 * 74 * 94 + 86 + 65 / 78 * 87 + 65 / 83 * 83 / 62 - 83 / 21 + 10 * 55 - 12 + 67 + 11 - 78 / 30 * 86 - 12 - 20 / 23 / 51 - 54');
// -2123856.0871199886;
