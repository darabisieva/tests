const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'; 
      }
      return string.repeat(num);

};

// не трогайте этот участок кода ниже
module.exports = repeatString;
