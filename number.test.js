describe("Numbers", () => {
  it("Should use remainder operator '%' ", () => {
    const a = 15;
    const b = 10;

    expect(a % b).toBe(5);
    expect(a * 2 % b).toBe(0);
  });

  test("Should get average of 3 numbers", () => {
    function average(a, b, c) {
      return (a + b + c) / 3
    }

    expect(average(2, 4, 6)).toBe(4);
    expect(average(-5, 12, -7)).toBe(0);
  });

  test("Should get a last digit of the number", () => {
    function last(a) {
      return +String(a).slice(-1)
    }

    expect(last(123)).toBe(3);
    expect(last(3982)).toBe(2);
  });

  test("Should sum the digits of a given number", () => {
    function sumDigits(a) {
      let str = String(a);
      let summa = 0;
      for (let i = 0; i < str.length; i++) {
        summa += +str[i];
      }
      return summa
    }

    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(53)).toBe(8);
  });

  test("Should return true if specified number is prime", () => {
    function isPrime(a) {
      for (let i = 2; i < a; i++) {
        if (a % i === 0) return false;
      }
      return true;
    }

    expect(isPrime(7)).toBe(true);
    expect(isPrime(4)).toBe(false);
    // TODO: Write additional tests
    expect(isPrime(29)).toBe(true);
    expect(isPrime(15)).toBe(false);
  });

  test("Should convert string to number", () => {
    function convert(a) {
      return +a;
    }

    expect(convert('234')).toBe(234);
  });

  test("Should find highest value", () => {
    // TODO: Write 2 functions max and max2. Only one of them should use Math
    function max(a, b) {
      return Math.max(a, b);
    }

    function max2() {
      let max = arguments[0];
      for (let i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
          max = arguments[i];
        }
      }
      return max
    }

    expect(max(1, 2)).toBe(2);
    expect(max2(1, 7, 2, 8, 5)).toBe(8);
  });

  test("Should find lowest value", () => {
    function min() {
      return Math.min.apply(null, Array.from(arguments));
    }

    function min2() {
      let min = arguments[0];
      for (let i = 0; i < arguments.length; i++) {
        if (min > arguments[i]) {
          min = arguments[i];
        }
      }
      return min
    }
    expect(min(2, 3, 9, 4, 1, 5)).toBe(1);
    expect(min2(2, 3, 9, 4, 1, 5)).toBe(1);
    // TODO: Write additional tests
    expect(min2(2, 2, 19, 4, -1, -25)).toBe(-25);
    expect(min(-2, 23, -9, 14, 21, 5)).toBe(-9);

  });

  test("Should round up a value to the nearest integer", () => {
    expect(Math.round(1)).toBe(1);
    expect(+(1.8).toFixed()).toBe(2);
    expect(Math.round(1.2)).toBe(1);
    expect(Math.round(-1.2)).toBe(-1);
  });

  test("Should get the largest integer less than or equal to a given number.  ", () => {
    expect(Math.floor(1)).toBe(1);
    expect(Math.floor(1.2)).toBe(1);
    expect(parseInt(1.8)).toBe(1);

    // TODO: Write additional tests
    expect(Math.floor(-2.5)).toBe(-3);
    expect(parseInt(4.8)).toBe(4);
  });

  test("Should return the base10 representation of a binary string", function () {
    expect(parseInt(11000000, 2)).toBe(192);
  });

  test("Should convert an eight-bit string number to a binary string", function () {
    expect(parseInt(127, 8).toString(2)).toBe("1010111");
    expect(parseInt(65, 8).toString(2)).toBe("110101");
  });
});
