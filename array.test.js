describe('Array', () => {
  it('Should find the position of the first occurrence', () => {
    const arr1 = [1, 5, 8, 3, 2];
    expect(arr1.indexOf(5)).toBe(1);
    expect(arr1.indexOf(3)).toBe(3);

    // TODO: Write additional its
    expect(arr1.indexOf(0)).toBe(-1);
    expect(arr1.indexOf(7)).toBe(-1);

  });

  it('Should return the specified array twice', () => {
    function double(arr) {
      return arr.concat(arr)
    }

    expect(double([1, 2, 3])).toStrictEqual([1, 2, 3, 1, 2, 3]);

    // TODO: Write additional its
    expect(double([5, 6])).toStrictEqual([5, 6, 5, 6]);
    expect(double(['a', 'b'])).toStrictEqual(['a', 'b', 'a', 'b']);
  });

  it('Convert the number array to  the array of string values', () => {
    function convertToStringArr(arr) {
      return arr.map(function (a) {
        return `${a}`
      })
    }

    expect(convertToStringArr([1, 2, 3])).toStrictEqual(['1', '2', '3']);

    // TODO: Write additional its
    expect(convertToStringArr([5, 6])).toStrictEqual(['5', '6']);
    expect(convertToStringArr([7, "a"])).toStrictEqual(['7', 'a']);
  });

  it('Should return the number of all occurrences of specified item in an array', () => {
    function calculateOccurences(arr, v) {
      return arr.filter(function (a) {
        return a === v
      }).length
    }

    expect(calculateOccurences([1, 2, 1, 4, 1], 1)).toBe(3);

    // TODO: Write additional its
    expect(calculateOccurences([3, 5, 3, 7], 3)).toBe(2);
    expect(calculateOccurences([1, 2, 1, 4, 1], 'a')).toBe(0);
  });

  it('Should convert strings from specified array to uppercase', () => {
    function toUppercase(arr) {
      return arr.map(function (a) {
        return a.toUpperCase()
      })
    }

    expect(toUppercase(["aaaa", "abc"])).toStrictEqual(['AAAA', 'ABC']);
  });

  it('Insert an item at specified position', () => {
    function insert(arr, v, i) {
      arr.splice(i, 0, v);
      return arr
    }

    expect(insert([1, 2, 4], 3, 2)).toStrictEqual([1, 2, 3, 4]);
  });

  it('Should return the n last items from the specified array', () => {
    function last(arr, v) {
      return arr.slice(-v)
    }

    expect(last([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7]);
  });

  it('Return the 3 largest items from integer array', () => {
    function find3Largest(arr, v) {
      let res = [];
      for (let i = 0; i < 3; i++) {
        for (let b = 0; b < arr.length; b++) {
          if (b === 0 || res[i] < arr[b] && !res.includes(arr[b]))
            res[i] = arr[b];
        }
      }
      return arr.filter(function (a) {
        return res.includes(a)
      });
    }

    expect(find3Largest([1, 3, 8, 3, 29, 11, 2, 17, 9, 1])).toStrictEqual(
      [29, 11, 17]
    );
  });

  it('Sort numbers array by using array method', () => {
    function sort(arr) {
      arr.sort(function (a, b) {
        if (a > b) {
          return -1;
        }
        if (a < b) {
          return 1;
        }
        return 0;
      })
      return arr
    }

    expect(sort([2, 3, 1, 8, 4, 5])).toStrictEqual([8, 5, 4, 3, 2, 1]);
  });

  it('Should summarize of all items of numbers array', () => {
    function sum(arr) {
      let sum = 0;
      arr.forEach(function (a) {
        sum += a;
      });
      return sum;
    }

    expect(sum([1, 5, 7, 9, 3])).toBe(25);
  });

  it('Should return the numbers of falsy value in the specified array', () => {
    function getNumberOfFalsy(arr) {
      let res = arr.filter(function (el) {
        return !!el;
      });
      return res.length;
    }

    expect(getNumberOfFalsy([1, 0, "", null, "hello", "0"])).toBe(3);
  });

  it('Should return an array of unique items from the specified array', () => {
    function unique(arr) {
      let res = [];
      for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
          res.push(arr[i])
        }
      }
      return res;
    }

    function uniqueMap(arr) {
      return Array.from(new Set(arr));
    }

    expect(unique(["a", "b", "a", "c", "e", "b", "o"])).toStrictEqual([
      'a',
      'b',
      'c',
      'e',
      'o'
    ]);
    expect(uniqueMap(["a", "b", "a", "c", "e", "b", "o"])).toStrictEqual([
      'a',
      'b',
      'c',
      'e',
      'o'
    ]);
  });

  it('Should return a map of grouped data by key and value selector', function () {
    let arr = [
      {country: 'Belarus', city: 'Brest'},
      {country: 'Russia', city: 'Omsk'},
      {country: 'Russia', city: 'Samara'},
      {country: 'Belarus', city: 'Grodno'},
      {country: 'Belarus', city: 'Minsk'},
      {country: 'Poland', city: 'Lodz'}
    ];

    function group(arr, key) {
      let res = new Map();
      for (let i = 0; i < arr.length; i++) {
        let hasKey = res.get(arr[i][key]);
        if (hasKey) {
          res.set(arr[i][key], hasKey.concat([arr[i].city]))
        } else {
          res.set(arr[i][key], [arr[i].city])
        }
      }
      return Array.from(res);
    }

    expect(group(arr, 'country')).toStrictEqual([
      ['Belarus', ['Brest', 'Grodno', 'Minsk']],
      ['Russia', ['Omsk', 'Samara']],
      ['Poland', ['Lodz']]
    ]);
  });

  it('Should creates an array with all falsy values removed.', () => {
    function compact(arr) {
      return arr.filter(function (el) {
        return !!el;
      })
    }

    expect(compact([1, 0, null, "a"])).toStrictEqual([1, 'a']);
  });

  it('Should flattens array a single level deep', () => {
    function flatten(arr) {
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (Array.isArray(value)) {
          for (let j = 0; j < value.length; j++) {
            result.push(value[j]);
          }
        } else {
          result.push(value);
        }
      }
      return result;
    }

    expect(flatten([1, [2, [3, [4]], 5]])).toStrictEqual([
      1,
      2,
      [3, [4]],
      5
    ]);
  });

  it('Should recursively flattens array.', () => {
    function flattenDeep(arr) {
      let ret = [];
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          ret = ret.concat(flattenDeep(arr[i]));
        } else {
          ret.push(arr[i]);
        }
      }
      return ret;
    }

    expect(flattenDeep([1, [2, [3, [4]], 5]])).toStrictEqual([
      1,
      2,
      3,
      4,
      5
    ]);
  });

  it('Should creates an array of unique values that are included in all given', () => {

    function intersection(arr1, arr2) {
      let res = [];
      for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
          res.push(arr1[i])
        }
      }
      return res;
    }

    expect(intersection([1, 2, 3, 4], [8, 3, 1, 0, 9])).toStrictEqual([
      1,
      3
    ]);
  });

  it('Should remove all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with two arguments: (value, index).', () => {
    const arr = [1, 7, 5, 2, 8];
    const gt5 = v => v > 5;

    let removed;

    function remove(arr, fn) {
      removed = arr.filter(fn);
      for (let i = 0; i < removed.length; i++) {
        let inx = arr.indexOf(removed[i]);
        if (inx !== -1) {
          arr.splice(inx, 1);
        }
      }
    }

    remove(arr, gt5);
    expect(arr).toStrictEqual([1, 5, 2]);
    expect(removed).toStrictEqual([7, 8]);
  });
});
