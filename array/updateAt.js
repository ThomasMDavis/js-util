export const updateAt = (arr, index, item) => [
  ...arr.slice(0, index),
  item,
  ...arr.slice(index + 1)
];
