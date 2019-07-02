export const sortBy = (arr, key, direction = "asc") => {  
  const compareFn = (a, b) => {
    const sortByParams = (a, b) => a < b ? -1 : a > b ? 1 : 0;

    const sortByDirection = {
      asc: () => sortByParams(compareA, compareB),
      desc: () => sortByParams(compareB, compareA)
    };

    const compareA = a[key].toLowerCase();
    const compareB = b[key].toLowerCase();

    return sortByDirection[direction]();
  };

  return [...arr].sort(compareFn);
};
