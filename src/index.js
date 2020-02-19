
exports.min = function min (array) {
  if (Array.isArray(array) && array.length > 0) {
      let sortedArr = array.sort((a, b) => (a - b));
      return sortedArr[0];
  } else return 0;
};

exports.max =  function max (array) {
  if (Array.isArray(array) && array.length > 0) {
  let sortedArr = array.sort((a, b) => (a - b)).reverse();
  return sortedArr[0];
} else return 0;
};

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length > 0) {
  let avgNum = 0;
  avgNum = array.reduce((a, b) => (a + b)) / array.length;
  return avgNum;
} else return 0;
};

