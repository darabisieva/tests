function removeFromArray(arr, ...valuesToRemove) {
    return arr.filter(item => !valuesToRemove.includes(item));
  }

// не трогай код ниже
module.exports = removeFromArray;
