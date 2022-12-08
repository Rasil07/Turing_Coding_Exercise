let set = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function generateSubSets(array) {
  let result = [];
  for (let i = 0; i < (1 << array.length) - 1; i++) {
    let subset = [];
    for (let j = 0; j < array.length - 1; j++) {
      if (i & (1 << j)) subset.push(array[j]);
    }

    result.push(subset);
  }

  return result;
}

console.log(generateSubSets(set));
