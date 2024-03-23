const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  
// Альтернативный способ обмена значениями min и max, как показано выше, - использовать синтаксис деструктуризации массива.
// Вот дополнительная статья по этой теме: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
// если (min > max) [min, max] = [max, min];

  
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
