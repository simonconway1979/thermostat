describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("knows if something is divisible by 3", function () {
    expect(fizzBuzz.divisibleBy3(3)).toEqual(true);
  });

  it("knows if something is divisible by 4", function () {
    expect(fizzBuzz.divisibleBy3(4)).toEqual(false);
  });

    it("knows if something is divisible by 5", function () {
      expect(fizzBuzz.divisibleBy5(5)).toEqual(true);
    });

    it("knows if something is divisible by 15", function () {
      expect(fizzBuzz.divisibleBy15(15)).toEqual(true);
    });

    it("knows if a number is divisible by divisor", function () {
    expect(fizzBuzz.divisibleByDivisor(3,3)).toEqual(true);
    expect(fizzBuzz.divisibleByDivisor(5,5)).toEqual(true);
    expect(fizzBuzz.divisibleByDivisor(15,15)).toEqual(true);
    });

    it("knows if a number is not divisible by divisor", function () {
    expect(fizzBuzz.divisibleByDivisor(3,4)).toEqual(false);
    expect(fizzBuzz.divisibleByDivisor(5,6)).toEqual(false);
    expect(fizzBuzz.divisibleByDivisor(15,16)).toEqual(false);
    });

    it("returns fizz when the number is divisible by 3", function () {
      expect(fizzBuzz.play(3)).toEqual('fizz');
    });

    it("returns buzz when the number is divisible by 3", function () {
      expect(fizzBuzz.play(5)).toEqual('buzz');
    });

    it("returns fizzbuzz when the number is divisible by 3", function () {
      expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
    });

});
