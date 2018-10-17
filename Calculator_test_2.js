/* eslint-disable func-names, class-methods-use-this */
class Calculator {
  evaluate(string) {
    let firstOps;
    let str = string.replace(/ /g, '');
    let firstMatch;
    // let firstMatch = str.match(/^\d+(\/|\*)\d+/);
    // console.log('firstMatch = ', firstMatch);
    // if (/^\d+(\/|\*)\d+/.test(str)) {

    do {
      if (/\d+(\/)\d+/.test(str)) {
        firstMatch = str.match(/\d*(\.)?(\d*)?(\/)\d*(\.)?(\d*)?/);
        // console.log('/ firstMatch =', firstMatch);
        firstOps = firstMatch[0].match(/\d+(\.\d+)?/g).reduce((acc, cur) => (+acc) / (+cur));
        str = str.replace(firstMatch[0], firstOps);
      } else if (/\d+(\*)\d+/.test(str)) {
        firstMatch = str.match(/\d*(\.)?(\d*)?(\*)\d*(\.)?(\d*)?/);
        // console.log('* firstMatch =', firstMatch);
        firstOps = firstMatch[0].match(/\d+(\.\d+)?/g).reduce((acc, cur) => (+acc) * (+cur));
        str = str.replace(firstMatch[0], firstOps);
      }
    } while (/\d+(\/)\d+/.test(str) || /\d+(\*)\d+/.test(str))

    let result = string
      // str
      .split('+')
      .map(valPlus => (
        valPlus
          .split('-')
          .map(valMinus => (
            valMinus
              .split('/')
              .map(valDiv => (
                valDiv
                  .split('*')
                  .reduce((acc, cur) => +acc * +cur)
              ))
              .reduce((acc, cur) => +acc / +cur)
          ))
          .reduce((acc, cur) => +acc - +cur)
      ))
      .reduce((acc, cur) => acc + +cur, 0);

    console.log('str =', str, 'result =', result, 'firstSplit =', str.split('+').map(val => val.split('-').reduce((acc, cur) => Number(acc) - Number(cur))));
    // do {
    //   if (/\d+(\+)\d+/.test(str)) {
    //     firstMatch = str.match(/\d+(\+)\d+/);
    //     firstOps = firstMatch[0].match(/\d+/g).reduce((acc, cur) => (+acc) + (+cur));
    //     str = str.replace(firstMatch[0], firstOps);
    //   } else if (/\d+(\-)\d+/.test(str)) {
    //     firstMatch = str.match(/\d+(\-)\d+/);
    //     firstOps = firstMatch[0].match(/\d+/g).reduce((acc, cur) => (+acc) - (+cur));
    //     str = str.replace(firstMatch[0], firstOps);
    //   }
    // } while (/\d+(\+)\d+/.test(str) || /\d+(\-)\d+/.test(str))
    // // else {
    // //  firstOps = str.match(/\d+/)[0];
    // //}
    // console.log('str =', str, 'firstMatch =', firstMatch, 'firstOps =', firstOps);
  }
}

const calculate = new Calculator();
calculate.evaluate('2 / 2 + 3 * 4 - 6');
// calculate.evaluate('2 * 2 + 3 * 4 - 6');
// calculate.evaluate('10 + 5 / 2');
// calculate.evaluate('10 + 1 - 5  / 2');
// calculate.evaluate('10 * 5 / 2');
calculate.evaluate('2 - 3 - 4');
calculate.evaluate('2 + 3');
calculate.evaluate('93 + 32 * 48 / 48 * 4 * 69 + 1 * 66 / 83 + 6 * 45 + 54 * 57 - 46 * 77 / 37 / 49 + 65 - 61 * 59 + 13 * 9 * 72 + 74 - 86 - 17 * 70 - 73 * 44 - 94 / 47 - 6 - 45 + 85 * 31 - 61 - 93 + 63 - 50 + 78 - 67 + 36 * 63 * 98 / 1 + 98 + 4 * 61 / 56 + 32 / 13 / 33 / 7 * 77 + 82 - 75 - 47 / 3 - 39 + 69 * 98 * 82 / 94 - 1 * 19 + 62 * 24 + 27 * 20 - 87 + 21 / 23 + 89 - 56 * 91 * 38 + 31 + 12 - 77 + 55 * 64 * 70 + 3 - 29 / 23 / 47 * 50 * 34 + 89')

