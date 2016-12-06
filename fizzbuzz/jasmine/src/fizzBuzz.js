function FizzBuzz() {}

FizzBuzz.prototype.divisibleBy3 = function(number) {
  return number % 3 === 0;
};

FizzBuzz.prototype.divisibleBy5 = function(number) {
  return number % 5 === 0;
};

FizzBuzz.prototype.divisibleBy15 = function(number) {
  return number % 15 === 0;
};

FizzBuzz.prototype.divisibleByDivisor = function(number, divisor) {
  return number % divisor === 0;
};

FizzBuzz.prototype.play = function(number) {
  if (this.divisibleByDivisor(number, 15)) {
    return 'fizzbuzz';
  } else if (this.divisibleByDivisor(number, 5)) {
    return 'buzz';
  } else if (this.divisibleByDivisor(number, 3)) {
    return 'fizz';
  } else {
    return number;
    };
};
