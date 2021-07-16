function numToObj(num) {
  if (num > 999 || num < 0) {
    console.log('Число не соответствует допустимым значениям');
    return {};
  }
  return {
    units: num % 10,
    dozens: ((num % 100) - (num % 10)) / 10,
    hundreds: ((num % 1000) - (num % 100)) / 100,
  };
}

console.log(numToObj(126));
