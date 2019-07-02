import * as array from "./array";

export const arrUtil = arr => ({
  insertAt: (index, item) => arrUtil(array.insertAt(arr, index, item)),
  removeAt: index => arrUtil(array.removeAt(arr, index)),
  sortBy: (key, direction) => arrUtil(array.sortBy(arr, key, direction)),
  updateAt: (index, item) => arrUtil(array.updateAt(arr, index, item)),
  val: arr
});
