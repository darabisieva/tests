const leapYears = function(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

};

// ну ты понял
module.exports = leapYears;
