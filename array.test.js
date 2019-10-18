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
    function double(arr){
      return arr.concat(arr)
    }
    expect(double([1, 2, 3])).toStrictEqual([1, 2, 3, 1, 2, 3]);

    // TODO: Write additional its
  });

  it('Convert the number array to  the array of string values', () => {
    function convertToStringArr(arr){
      return arr.map(function(a){return `${a}`})
    }
    expect(convertToStringArr([1, 2, 3])).toStrictEqual(['1', '2', '3']);

    // TODO: Write additional its
  });

  it('Should return the number of all occurrences of specified item in an array', () => {
    function calculateOccurences(arr, v){
      return arr.filter(function (a){return a === v}).length
    }
    expect(calculateOccurences([1, 2, 1, 4, 1], 1)).toBe(3);

    // TODO: Write additional its
  });

  it('Should convert strings from specified array to uppercase', () => {
    function toUppercase(arr){
      return arr.map(function (a){return a.toUpperCase()})
    }
    expect(toUppercase(["aaaa", "abc"])).toStrictEqual(['AAAA', 'ABC']);
  });

  it('Insert an item at specified position', () => {
    function insert(arr,v,i){
      arr.splice(i,0,v);
      return arr
    }
    expect(insert([1, 2, 4], 3, 2)).toStrictEqual([1, 2, 3, 4]);
  });

  it('Should return the n last items from the specified array', () => {
    function last(arr,v){
    return arr.slice(-v)
      }
    expect(last([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7]);
  });

  it('Return the 3 largest items from integer array', () => {
    function find3Largest(arr, v){
      let res = [];
      for(let i = 0; i<3;i++){
        for(let b=0;b<arr.length;b++){
          if(b===0 || res[i] < arr[b] && !res.includes(arr[b]))
            res[i] = arr[b];
        }
      }
      return arr.filter(function (a) { return res.includes(a)});
    }

    expect(find3Largest([1, 3, 8, 3, 29, 11, 2, 17, 9, 1])).toStrictEqual(
      [29, 11, 17]
    );
  });

  it('Sort numbers array by using array method', () => {
    function sort(arr){
      arr.sort(function (a, b) {
        if (a > b){
          return -1;
        }
        if (a < b){
          return 1;
        }
        return 0;
      })
      return arr
    }
    expect(sort([2, 3, 1, 8, 4, 5] )).toStrictEqual([8, 5, 4, 3, 2, 1]);
  });

  it('Should summarize of all items of numbers array', () => {
    function sum(arr) {
      let sum = 0;
      arr.forEach(function (a) {
         sum+= a;
      });
      return sum;
    }
    expect(sum([1, 5, 7, 9, 3])).toBe(25);
  });

  it('Should return the numbers of falsy value in the specified array', () => {
    expect(/* getNumberOfFalsy([1, 0, "", null, "hello", "0"]) */).toBe(3);
  });

  it('Should return an array of unique items from the specified array', () => {
    expect(/* unique(["a", "b", "a", "c", "e", "b", "o"]) */).toStrictEqual([
      'a',
      'b',
      'c',
      'e',
      'o'
    ]);
  });

  it('Should return a map of grouped data by key and value selector', function() {
    let arr = [
      { country: 'Belarus', city: 'Brest' },
      { country: 'Russia', city: 'Omsk' },
      { country: 'Russia', city: 'Samara' },
      { country: 'Belarus', city: 'Grodno' },
      { country: 'Belarus', city: 'Minsk' },
      { country: 'Poland', city: 'Lodz' }
    ];

    expect(/* group(arr, 'country') */).toStrictEqual([
      ['Belarus', ['Brest', 'Grodno', 'Minsk']],
      ['Russia', ['Omsk', 'Samara']],
      ['Poland', ['Lodz']]
    ]);
  });

  it('Should creates an array with all falsy values removed.', () => {
    expect(/* compact([1, 0, null, "a"]) */).toStrictEqual([1, 'a']);
  });

  it('Should flattens array a single level deep', () => {
    expect(/* flatten([1, [2, [3, [4]], 5]]) */).toStrictEqual([
      1,
      2,
      [3, [4]],
      5
    ]);
  });

  it('Should recursively flattens array.', () => {
    expect(/* flattenDeep([1, [2, [3, [4]], 5]]) */).toStrictEqual([
      1,
      2,
      3,
      4,
      5
    ]);
  });

  it('Should creates an array of unique values that are included in all given', () => {
    expect(/* intersection([1, 2, 3, 4], [8, 3, 1, 0, 9]) */).toStrictEqual([
      1,
      3
    ]);
  });

  it('Should remove all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with two arguments: (value, index).', () => {
    const arr = [1, 7, 5, 2, 8];
    const gt5 = v => v > 5;

    let removed; /* remove(arr, gt5); */
    expect(arr).toStrictEqual([1, 5, 2]);
    expect(removed).toStrictEqual([7, 8]);
  });
});
