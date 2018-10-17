/* eslint-disable func-names, class-methods-use-this */
class Calculator {
  evaluate(string) {
    let firstOps;
    let str = string.replace(/ /g, '');
    let firstMatch;
    console.log('str =', str);
    // const regExpPiece = '\\d*(\\.)?(\\d*)?(e(\\-|\\+)\\d*)?';
    const regExpPiece = '\\d+(\\.)?(\\d+)?(e(\\-|\\+)\\d+)?';
    // const regExpPiece = '\\d*(?:\\.)?(?:\\d*)?(?:e(?:\\-|\\+)\\d*)?';
    do {
      if (/\d+(\/)\d+/.test(str)) {
        // firstMatch = str.match(/\d*(\.)?(\d*)?(\/)\d*(\.)?(\d*)?/);
        firstMatch = str.match(new RegExp(`${regExpPiece}(\\/)${regExpPiece}`));
        // // console.log('/ firstMatch =', firstMatch);
        // // firstOps = firstMatch[0].match(/\d+(\.\d+)?/g).reduce((acc, cur) => (+acc) / (+cur));
        // console.log('---------------- /', firstMatch[0], firstMatch[0].match(new RegExp(regExpPiece, 'g')));
        firstOps = firstMatch[0].match(new RegExp(regExpPiece, 'g')).reduce((acc, cur) => (+acc) / (+cur));
        // console.log('/ firstOps =', firstOps, /e/.test(firstOps) ? `-----------------TRUE ${Math.round(firstOps * 1000000000) / 1000000000}` : null);
        str = str.replace(firstMatch[0], firstOps);
        // // str = str.replace(firstMatch[0], `${Math.trunc(firstOps / 100000)}.${firstOps % 10}`);
        // // str = str.replace(firstMatch[0], Math.round(firstOps * 1000000000) / 1000000000);
        // /e/.test(firstOps) ? console.log('e') : null; // 42+4-74+3.785164068209068e-0.017857142857142856+81
        // console.log('/ str =', str);
      }
      // } else
      if (/\d+(\*)\d+/.test(str)) {
        // firstMatch = str.match(/\d*(\.)?(\d*)?(\*)\d*(\.)?(\d*)?/);
        firstMatch = str.match(new RegExp(`${regExpPiece}(\\*)${regExpPiece}`));
        // console.log('* firstMatch =', firstMatch);
        // firstOps = firstMatch[0].match(/\d+(\.\d+)?/g).reduce((acc, cur) => (+acc) * (+cur));
        firstOps = firstMatch[0].match(new RegExp(regExpPiece, 'g')).reduce((acc, cur) => (+acc) * (+cur));
        str = str.replace(firstMatch[0], firstOps);
        // // str = str.replace(firstMatch[0], `${Math.trunc(firstOps / 100000)}.${firstOps % 100000}`);
        // // str = str.replace(firstMatch[0], Math.round(firstOps * 1000000000) / 1000000000);
        // // Math.
        // /e/.test(firstOps) ? console.log('e') : null;
        // console.log('* str =', str);
      }
    } while (/\d+(\/)\d+/.test(str) || /\d+(\*)\d+/.test(str));
    console.log('AFTER * && / str =', str);
    let FORSAFE = 0;
    do {
      if (/\d+(\-)\d+/.test(str)) {
        // firstMatch = str.match(/\d+(\-)\d+/);
        firstMatch = str.match(new RegExp(`(^\\-)?${regExpPiece}(\\-)${regExpPiece}`));
        // firstOps = firstMatch[0].match(/\d+/g).reduce((acc, cur) => (+acc) - (+cur));
        console.log('---------------- -', firstMatch[0], firstMatch[0].match(new RegExp(`(^\\-)?${regExpPiece}`, 'g')));
        firstOps = firstMatch[0].match(new RegExp(`(^\\-)?${regExpPiece}`, 'g')).reduce((acc, cur) => (+acc) - (+cur));
        str = str.replace(firstMatch[0], firstOps).replace('+-', '-');
        console.log('- str =', str);
      } else if (/\d+(\+)\d+/.test(str)) {
        // firstMatch = str.match(/\d+(\+)\d+/);
        // firstMatch = str.match(/\d*(\.)?(\d*)?(e(\-|\+)\d*)?(\+)\d*(\.)?(\d*)?(e(\-|\+)\d*)?/);
        firstMatch = str.match(new RegExp(`(^\\-)?${regExpPiece}(\\+)${regExpPiece}`));
        // firstOps = firstMatch[0].match(/\d+/g).reduce((acc, cur) => (+acc) + (+cur));
        console.log('---------------- +', firstMatch[0], firstMatch[0].match(new RegExp(`(^\\-)?${regExpPiece}`, 'g')));
        firstOps = firstMatch[0].match(new RegExp(`(^\\-)?${regExpPiece}`, 'g')).reduce((acc, cur) => (+acc) + (+cur));
        str = str.replace(firstMatch[0], firstOps);
        console.log('+ str =', str);
      }
      if (++FORSAFE > 10000) { console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!BREAKE'); break; }
    // } while (/\d+(\+)\d+/.test(str) || /\d+(\-)\d+/.test(str));
    } while (new RegExp(`${regExpPiece}(\\+)${regExpPiece}`).test(str) || new RegExp(`${regExpPiece}(\\-)${regExpPiece}`).test(str));

    // const result = str
    //   .split('+')
    //   .map(val => (
    //     val
    //       .split('-')
    //       .reduce((acc, cur) => Number(acc) - Number(cur))
    //   ))
    //   .reduce((acc, cur) => Number(acc) + Number(cur));

    // // console.log('str =', str, 'result =', result, 'firstSplit =', str.split('+').map(val => val.split('-').reduce((acc, cur) => +acc - +cur)));
    // console.log('result =', result);
    console.log('++++++++FINAL str =', str);
    return str;
  }
}

const calculate = new Calculator();
// calculate.evaluate('2 / 2 + 3 * 4 - 6');
// calculate.evaluate('2 * 2 + 3 * 4 - 6');
// // calculate.evaluate('10 + 5 / 2');
// // calculate.evaluate('10 + 1 - 5  / 2');
// // calculate.evaluate('10 * 5 / 2');
// calculate.evaluate('2 - 3 - 4');
// calculate.evaluate('2 + 3');
// calculate.evaluate('93 + 32 * 48 / 48 * 4 * 69 + 1 * 66 / 83 + 6 * 45 + 54 * 57 - 46 * 77 / 37 / 49 + 65 - 61 * 59 + 13 * 9 * 72 + 74 - 86 - 17 * 70 - 73 * 44 - 94 / 47 - 6 - 45 + 85 * 31 - 61 - 93 + 63 - 50 + 78 - 67 + 36 * 63 * 98 / 1 + 98 + 4 * 61 / 56 + 32 / 13 / 33 / 7 * 77 + 82 - 75 - 47 / 3 - 39 + 69 * 98 * 82 / 94 - 1 * 19 + 62 * 24 + 27 * 20 - 87 + 21 / 23 + 89 - 56 * 91 * 38 + 31 + 12 - 77 + 55 * 64 * 70 + 3 - 29 / 23 / 47 * 50 * 34 + 89');
// calculate.evaluate('42 + 4 - 74 + 1 / 27 / 28 / 93 / 88 * 61 * 7 / 14 * 40 + 81 + 34 / 86 + 95 - 30 + 95 * 10 * 92 - 88 / 69 / 69 * 84 + 25 * 59 / 14 - 54 / 82 + 31 / 1 / 23 / 82 + 69 + 58 + 7 - 55 / 9 / 36 * 50 + 79 - 53 * 69 / 54');
// calculate.evaluate('68 * 99 / 18 - 7 * 83 * 72 / 73 + 74 * 38 / 54 / 69 / 99 / 21 / 55 / 34 - 60 / 2 * 43 / 20 * 7 * 93 * 54 - 52 / 36 / 69 / 20 - 90 * 96 / 42 * 11 * 62 + 69 + 24 * 88 / 96 + 21 * 23 - 15 * 34 - 44 / 99 / 8 / 26 + 15 / 45 - 68 * 95 / 70 / 73 * 59 / 54 * 43 - 24 / 39 / 57 + 40 + 91 * 81 - 52 - 68 * 41 - 74');
// -2403427.2580180373
calculate.evaluate('72 / 97 / 84 + 40 - 20 * 67 * 49 + 97 / 83 - 82 + 77 * 27 * 82 / 62 / 16 + 11 - 63 / 89 * 79 + 21 * 95 + 41 * 96 / 60 / 38 / 38 * 37 / 60 / 24 / 34 / 34 / 58 / 30 - 37 / 65 / 33 - 4 * 49 * 87 - 40 * 30 - 13 * 17 + 47 / 74 - 12 - 54 / 77 * 13 / 91 + 74 * 67 + 90');
// -77015.37331432116
// calculate.evaluate('2+3*4/3-6/3*3+8');
// 8
