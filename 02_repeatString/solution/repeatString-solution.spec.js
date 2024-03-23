const repeatString = require('./repeatString-solution');

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
    /* Число генерируется с помощью Math.random для получения значения от
    от 0 до 1, когда оно умножается на 1000 и округляется вниз с помощью Math.floor. 
    равняется числу от 0 до 999 (это число будет меняться каждый раз, когда вы запускаете
    теста).*/

    // НЕ используйте Math.floor(Math.random() * 1000) в своем коде,
    // этот тест генерирует случайное число, а затем передает его в ваш код в качестве параметра функции.
    // Если это не имеет смысла, вам стоит почитать о функциях одном из наших уроков
    const number = Math.floor(Math.random() * 1000);
    /* Длина .match(/((hey))/g).length - это регекс, который подсчитывает количество heys
    в результате, которое, если ваша функция работает правильно, будет равно числу, которое
    было сгенерировано случайным образом. */
    expect(repeatString('hey', number).match(/((hey))/g).length).toEqual(
      number
    );
  });
  test('works with blank strings', () => {
    expect(repeatString('', 10)).toEqual('');
  });
});
