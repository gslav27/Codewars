/* eslint-disable func-names, no-param-reassign */
const Dice = {};
const defs = [1, 6, 0];

const parseAttrs = (numberOfDice, numberOfSides, modifier) => {
  if (!numberOfDice) {
    [numberOfDice, numberOfSides] = defs;
  } else if (typeof (numberOfDice) === 'string') {
    if (/[+-]/.test(numberOfDice)) {
      numberOfDice = numberOfDice.replace(/(\+|-)\d+/, (m) => {
        modifier = +m;
        return '';
      });
    }
    if (/d/.test(numberOfDice)) {
      const splittedStr = numberOfDice.split('d');
      numberOfDice = +splittedStr[0] || defs[0];
      numberOfSides = +splittedStr[1] || defs[1];
    } else {
      numberOfSides = +numberOfDice;
      [numberOfDice] = defs;
    }
  } else if (!numberOfSides && (typeof (numberOfDice) === 'number')) {
    numberOfSides = numberOfDice;
    [numberOfDice] = defs;
  }
  return [numberOfDice, numberOfSides, modifier];
};

Dice.roll = function (numberOfDice, numberOfSides, modifier = defs[2]) {
  let result = 0;
  [numberOfDice, numberOfSides, modifier] = parseAttrs(numberOfDice, numberOfSides, modifier);
  for (let d = 1; d <= numberOfDice; d++) {
    result += Math.ceil((Math.random() || 1) * numberOfSides);
  }
  return result + modifier;
};

Dice.of = function (numberOfDice, numberOfSides, modifier = defs[2]) {
  [numberOfDice, numberOfSides, modifier] = parseAttrs(numberOfDice, numberOfSides, modifier);
  const dice = () => this.roll(numberOfDice, numberOfSides, modifier);
  dice.toString = () => `${numberOfDice}d${numberOfSides}${modifier ? `${modifier > 0 ? '+' : ''}${modifier}` : ''}`;
  return dice;
};

// console.log(Dice.roll(1, 6));
// console.log(Dice.roll(2, 8));
// console.log(Dice.roll(1, 12, 2));
// console.log(Dice.roll('1d6+6'));
// console.log(Dice.roll(''));
// console.log(Dice.roll(8));
// console.log('DICE OF');
// console.log(Dice.of(3, 5, 7)());
// console.log(Dice.of(3, 5, 7).toString());
// Dice.of(6, 4, -2);
// Dice.of();

// console.log(Dice.of(3, 5, 7).toString());
// console.log(Dice.of('1d8-1').toString());
// console.log(Dice.of('1d6+6').toString());
console.log(Dice.of('1d8-1').toString());
console.log('________________________');
console.log(Dice.of('d7').toString());
// console.log(Dice.of('3d4+12').toString());
// console.log(Dice.of(3, 5, 7).toString());
