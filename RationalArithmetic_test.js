/* eslint-disable func-names */
function Rational(numerator, denominator) {
  this.numerator = numerator;
  this.denominator = denominator || 1;
  this.simplify();
}

Rational.prototype.toString = function () {
  return `${this.numerator}/${this.denominator}`;
};

const findGCF = (n, d) => {
  const checked = [0, 1];
  const fillChecked = (i, type) => {
    for (let j = i * (type ? i : 2); (j <= n || j <= d); j *= (type ? i : 2)) {
      (type && (!(n % j) && !(d % j))) ? checked[j] = 1 : checked[j] = 0;
    }
  };
  for (let i = 2; (i <= n || i <= d); i++) {
    if (checked[i] !== undefined) continue;
    (!(n % i) && !(d % i))
      ? (checked[i] = 1, fillChecked(i, 1))
      : (checked[i] = 0, fillChecked(i, 0));
    if (checked.lastIndexOf(1) > i) i = checked.lastIndexOf(1);
  }
  return checked.lastIndexOf(1);
};

Rational.prototype.simplify = function () {
  if (!this.numerator) this.denominator === 1;
  if (Math.sign(this.denominator) === -1) { this.numerator *= -1; this.denominator *= -1; }
  const gcf = findGCF(this.numerator, this.denominator);
  this.numerator /= gcf;
  this.denominator /= gcf;
};

Rational.prototype.equals = function (b) {
  return this.numerator / this.denominator == b.numerator / b.denominator;
};

Rational.prototype.lessThan = function (b) {
  return this.numerator / this.denominator < b.numerator / b.denominator;
};

Rational.prototype.greaterThan = function (b) {
  return this.numerator / this.denominator > b.numerator / b.denominator;
};

Rational.prototype.lessThanOrEquals = function (b) {
  return this.numerator / this.denominator <= b.numerator / b.denominator;
};

Rational.prototype.greaterThanOrEquals = function (b) {
  return this.numerator / this.denominator >= b.numerator / b.denominator;
};

Rational.prototype.add = function (b) {
  const x = new Rational(this.numerator * b.denominator + b.numerator * this.denominator, this.denominator * b.denominator);
  return `${x.numerator}/${x.denominator}`;
};

Rational.prototype.sub = function (b) {
  const x = new Rational(this.numerator * b.denominator - b.numerator * this.denominator, this.denominator * b.denominator);
  return `${x.numerator}/${x.denominator}`;
};

Rational.prototype.mul = function (b) {
  const x = new Rational(this.numerator * b.numerator, this.denominator * b.denominator);
  return `${x.numerator}/${x.denominator}`;
};

Rational.prototype.div = function (b) {
  const x = new Rational(this.numerator * b.denominator, b.numerator * this.denominator);
  return `${x.numerator}/${x.denominator}`;
};


const test_1 = new Rational(63, 72);
const minusHalf = new Rational(5, -10);

const a = new Rational(1, 6);
const b = new Rational(3, 10);
console.log(a.add(b));
console.log(28 / 60);

// console.log(minusHalf.add(minusHalf));
// console.log(minusHalf.add(minusHalf).equals(new Rational(-1, 1)));
// console.log(minusHalf.equals(new Rational(-1, 1)));

