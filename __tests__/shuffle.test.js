const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('return an array', () => {
    let result = shuffle([1, 2, 3, 4, 5]);
    expect(Array.isArray(result)).toBe(true);
  })

  test('return an array of the same length', () => {
    let inputArr = [1, 2, 3, 4, 5];
    let result = shuffle(inputArr);
    expect(result).toHaveLength(inputArr.length);
  })

  test('return all the same items in the array', () => {
    let inputArr = [1, 2, 3, 4, 5];
    let result = shuffle(inputArr);
    inputArr.forEach(el => expect(result).toContain(el));
  })

  test('return an array with shuffled items', () => {
    let inputArr = [1, 2, 3, 4, 5];
    let result = shuffle(inputArr);
    expect(result).not.toEqual(inputArr);
  })
});
