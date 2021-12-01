// each function represents a button the calculator. When pressed, it will enter it into the calculator input field
// for example the default calculator app on any pc. 

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (arr) {
  return arr.reduce((multiArr, val) => multiArr * val);
};

const divide = function (arr) {
  return arr.reduce((multiArr, val) => multiArr * val);
};
