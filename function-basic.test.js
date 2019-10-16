describe("Function basic", () => {
    it("Should be function declarations", () => {
        function simpleFunction() {
            return "I am a function declarations";
        }

        expect(simpleFunction()).toBe("I am a function declarations");
    });

    it("Should be function expression", () => {
        let functionExpression = function () {
            return "I am a function expression";
        }
        expect(functionExpression()).toBe("I am a function expression");
    });

    it("Should get sum of 2 numbers", () => {
        function sum(a, b) {
            return a + b;
        }

        expect(sum(5, 7)).toBe(12);
        expect(sum(10, 1000)).toBe(1010);
        expect(sum(-10, 10)).toBe(0);
    });

    test("Should get arguments length", () => {
        function withoutArguments() {
          return arguments.length;
        }

        function withOneArgument(a) {
            return arguments.length;
        }

        function withTwoArguments(a, b) {
            return arguments.length
        }

        // TODO: Declare 3 functions (withoutArguments, withOneArgument, withTwoArguments ) with different quantity of named arguments
        expect(withoutArguments()).toBe(0);
        expect(withOneArgument(1)).toBe(1);
        expect(withTwoArguments(1, 2)).toBe(2);
        expect(withTwoArguments(1)).toBe(1);
        expect(withoutArguments(1, 2, 3, 4, 5)).toBe(5);
    });

    test("Should find argument at N position", () => {
      function fn(a){
        return arguments[a];

      }
        // Write function fn. First argument should be position (N) of argument
        expect(fn(1)).toBe(undefined);
        expect(fn(1, "a")).toBe("a");
        expect(fn(3, "a", "b")).toBe(undefined);
        expect(fn(1, "a", "b", "c")).toBe("a");
        expect(fn(2, "a", "b", "c")).toBe("b");
        expect(fn(3, "a", "b", "c")).toBe("c");
    });

    it("Should return string of wrapped arguments", () => {
      function wrap(){
        let ar = Array.from(arguments).join('|');
        return `|${ar}|`
      }
        expect(wrap("a", "b")).toBe("|a|b|");
        expect(wrap("a", "b", "c", "d", "e")).toBe("|a|b|c|d|e|");
    });

    test("Should use Function as argument", () => {
        // Write logCalculationResult function. Function should accept 2 arguments
        // First is calculation function
        // Second is argument for calculation function
        // Return value is message 'Result is ###'

      function logCalculationResult(func, arg){
        let res = func(arg);
        return `Result is ${res}`;
      }

        function add10(a) {
            return a + 10;
        }

        function mul3(a) {
            return a * 3;
        }

        expect(logCalculationResult(add10, 7)).toBe("Result is 17");
        expect(logCalculationResult(mul3, 7)).toBe("Result is 21");
    });
});
