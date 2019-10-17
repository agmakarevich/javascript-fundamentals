describe('Function and closure', () => {
  test('Should return  composition of two functions', () => {
    // DON'T CHANGE
    function add5(x) {
      return x + 5;
    }

    // DON'T CHANGE
    function mul3(x) {
      return x * 3;
    }

    function compose(add5, mul3) {
      return function (val) {
        return add5(mul3(val))
      }
    }

    expect(compose(add5, mul3)(2)).toBe(add5(mul3(2)));
  });

  test('Should create new user with unique number identifier using increment', () => {
    let index = 0;

    function createUser(name) {
      return {name: name, id: ++index}
    }

    expect(createUser("Ivan")).toStrictEqual({name: 'Ivan', id: 1});
    expect(createUser("Petr").name).toBe('Petr');
    expect(createUser("Anna").id).toBe(3);
  });

  test('Should create function that each time return new value incremented by incrementValue and start from start', () => {
    function createIncrementor(start, incrementValue) {
      let inc = 0;
      return function () {
        return start + inc++ * incrementValue;
      }
    }

    const nextFrom10By7 = createIncrementor(10, 7);
    expect(nextFrom10By7()).toBe(10);
    expect(nextFrom10By7()).toBe(17);
    expect(nextFrom10By7()).toBe(24);
  });

  test('Fix me. Function creation inside cycle. Find 2 different solutions', () => {
    function solution1(from, to) {
      const result = [];
      for (var i = from; i <= to; i++) {
        let n = i;
        let fn = function () {
          return n;
        };
        result.push(fn);
      }
      return result;
    }

    function solution2(from, to) {
      const result = [];
      for (let i = from; i <= to; i++) {
        result.push(function () {
          return i;
        });
      }
      return result;
    }

    const result1 = solution1(10, 100);
    const result2 = solution2(10, 100);
    expect(result1[0]()).toBe(10);
    expect(result1[10]()).toBe(20);
    expect(result1[90]()).toBe(100);
    expect(result2[0]()).toBe(10);
    expect(result2[10]()).toBe(20);
  });

  test('Should works as expected. Fix me', () => {
    let a = 0;

    function foo(callback) {
      let a = 10;

      function inner() {
        // DON"T CHANGE ME
        a++;
        return a;
      }

      return {
        fromInner: inner,
        fromCallback: callback()
      };
    }

    function getCallbackFn() {
      let a = 0;
      return function callbackFn() {
        // DON'T change me
        a += 2;
        return a;
      };
    }

    const fn1 = foo(getCallbackFn);
    const fn2 = foo(getCallbackFn);

    expect(fn1.fromInner()).toBe(11);
    expect(fn2.fromInner()).toBe(11);
    expect(fn1.fromCallback()).toBe(2);
    expect(fn2.fromCallback()).toBe(2);
    expect(fn1.fromInner()).toBe(12);
    expect(fn2.fromInner()).toBe(12);
    expect(fn1.fromCallback()).toBe(4);
    expect(fn2.fromCallback()).toBe(4);
  });

  test('Should use private property', () => {
    // Function should return object with 2 methods: setValue and getValue.
    function createTestObject() {
      let v;

      function setValue(val) {
        v = val;
      }

      function getValue() {
        return v;
      }

      return {
        setValue: setValue,
        getValue: getValue
      }
    }

    let obj1 = createTestObject();
    let obj2 = createTestObject();
    obj1.setValue(10);
    expect(obj1.getValue()).toBe(10);
    obj2.setValue('obj2');
    expect(obj2.getValue()).toBe('obj2');
    expect(obj1.getValue()).toBe(10);
    expect(Object.keys(obj1).length).toBe(2);
  });

  test('Should create multiply function', () => {
    function multiply(a) {
      return function (n) {
        return n * a;
      }
    }

    let mul5 = multiply(5);
    let mul20 = multiply(20);

    expect(mul5(1)).toBe(5);
    expect(mul5(7)).toBe(35);
    expect(mul20(3)).toBe(60);
  });

  test('Calculate function invocation', () => {
    function fn() {
      // DON'T CHANGE ME
      return 'test';
    }

    function calcCall(func) {
      let ind = 0;
      let calc = function () {
        ++ind;
        return func();
      };
      return [calc, () => ind];
    }

    const [callFn, getFnCount] = calcCall(fn);
    const [callFn2, getFn2Count] = calcCall(fn);

    callFn();
    callFn();
    expect(callFn()).toBe('test');
    expect(getFnCount()).toBe(3);
    callFn();
    expect(getFnCount()).toBe(4);
    callFn2();
    expect(getFn2Count()).toBe(1);
    callFn2();
    expect(getFn2Count()).toBe(2);
  });

  test('Should cache the result of function with single argument', () => {
    function memoize(fn) {
      let val = [];
      return function (x) {
        let res = fn(x);
        if (val.includes(x)) {
          invokesCount--;
        } else {
          val.push(x)
        }
        return res;
      };
    }

    // DON'T CHANGE.
    let invokesCount = 0;

    function formula(x) {
      // DON'T CHANGE.
      invokesCount++;
      return 10 * x + 5;
    }

    const memoizedFormula = memoize(formula);

    expect(memoizedFormula(10)).toBe(105);
    expect(memoizedFormula(10)).toBe(105);
    expect(invokesCount).toBe(1);
    expect(memoizedFormula(5)).toBe(55);
    expect(invokesCount).toBe(2);
  });

  test('logger method should log start and end of call of the standard js function', () => {
    // DON'T CHANGE.
    const logger = {
      messages: [],
      logStart: function (name) {
        this.messages.push(`Start ${name}`);
      },

      logEnd: function (name) {
        this.messages.push(`End ${name}`);
      }
    };

    // DON'T CHANGE.
    function example() {
      return 'example';
    }

    function logMe(fn) {
      return function () {
        logger.logStart(fn.name);
        let res = fn();
        logger.logEnd(fn.name);
        return res;
      }
    }

    const loggedExample = logMe(example);
    expect(loggedExample()).toBe('example');
    expect(logger.messages).toStrictEqual(['Start example', 'End example']);
  });

  test('Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation. The func is invoked with the this binding and arguments of the created function.', () => {
    // DON'T CHANGE
    let callsCount = 0;

    function init() {
      // DON'T CHANGE
      callsCount++;
    }

    function once(fn) {
      let fnArr = [];
      return function () {
        if (!fnArr.includes(fn.name)) {
          fnArr.push(fn.name);
          fn();
        }
      }
    }

    const initialize = once(init);
    initialize();
    initialize();
    initialize();

    expect(callsCount).toBe(1);
  });

  test('Creates a function that invokes func with partials prepended to the arguments it receives. ', () => {
    function partial(fn, arg1) {
      return function (arg2) {
        return fn(arg1, arg2)
      }
    }

    //DON'T CHANGE
    function add(a, b) {
      return a + b;
    }

    const add10 = partial(add, 10);

    expect(add10(5)).toBe(15);
    expect(add10(20)).toBe(30);
  });
});
