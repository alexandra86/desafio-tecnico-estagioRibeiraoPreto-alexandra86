const nextNumberInA = (list) => {
  return list[list.length - 1] + 2;
};

const nextNumberInB = (list) => {
  return list[list.length - 1] * 2;
};

const nextNumberInC = (list) => {
  return Math.pow(list.length, 2);
};

const nextNumberInD = (list) => {
  return Math.pow((list.length + 1) * 2, 2);
};

const nextNumberInE = (list) => {
  return list[list.length - 1] + list[list.length - 2];
};

const nextNumberInF = (list) => {
  const lastElement = list[list.length - 1];

  switch (lastElement) {
    case 16:
      return lastElement + 1;
    case 17:
    case 18:
      return lastElement + 1;
    default:
      if (list.length % 2 === 0) {
        return lastElement + 2;
      } else {
        return lastElement + 8;
      }
  }
};

console.log(
  `O próximo número da sequência de A é: ${nextNumberInA([1, 3, 5, 7])}`
);

console.log(
  `O próximo número da sequência de B é: ${nextNumberInB([
    2, 4, 8, 16, 32, 64,
  ])}`
);

console.log(
  `O próximo número da sequência de C é: ${nextNumberInC([
    0, 1, 4, 9, 16, 25, 36,
  ])}`
);

console.log(
  `O próximo número da sequência de D é: ${nextNumberInD([4, 16, 36, 64])}`
);

console.log(
  `O próximo número da sequência de E é: ${nextNumberInE([1, 1, 2, 3, 5, 8])}`
);

console.log(
  `O próximo número da sequência de F é: ${nextNumberInF([
    2, 10, 12, 16, 17, 18, 19,
  ])}`
);
