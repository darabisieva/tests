const repeatString = require('./repeatString')

describe('repeatString', () => {
  test('repeats the string', () => {
    expect(repeatString('hey', 3)).toEqual('heyheyhey');
  });
  test('repeats the string many times', () => {
    expect(repeatString('hey', 10)).toEqual('heyheyheyheyheyheyheyheyheyhey');
  });
  test('repeats the string 1 times', () => {
    expect(repeatString('hey', 1)).toEqual('hey');
  });
  test('repeats the string 0 times', () => {
    expect(repeatString('hey', 0)).toEqual('');
  });
  test('returns ERROR with negative numbers', () => {
    expect(repeatString('hey', -1)).toEqual('ERROR');
  });
  test('repeats the string a random amount of times', function () {
   /* Число генерируется с использованием Math.random для получения значения от 0 до 1, когда это умножается на 1000 и округляется вниз с помощью Math.floor, это равно числу от 0 до 999 (это число будет изменяться при каждом запуске теста).*/

// НЕ используйте Math.floor(Math.random() * 1000) в вашем коде,
// этот тест генерирует случайное число, затем передает его в ваш код с параметром функции.

const number = Math.floor(Math.random() * 1000)
/* .match(/((hey))/g).length - это регулярное выражение, которое подсчитывает количество "hey" в результате, 
что, если ваша функция работает правильно, будет равно числу, которое было сгенерировано случайным образом. */
    expect(repeatString('hey', number).match(/((hey))/g).length).toEqual(number);
  });
  test('works with blank strings', () => {
    expect(repeatString('', 10)).toEqual('');
  });
});
