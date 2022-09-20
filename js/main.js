function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || max <= min) {
    return 'Введены не верные значения!';
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function checkStringLength(str, maxlegth) {
  return str.length <= maxlegth;
}

getRandomNumber(1, 7);
checkStringLength('я Ваня', 7);
