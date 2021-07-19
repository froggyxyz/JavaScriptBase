let i = 2;

while (i < 100) {
  let j = 2;
  while (j <= i) {
    if (i % j == 0 && j == i) {
      break;
    }
    if (i % j == 0) {
      j = 1;
      i++;
    }
    j++;
  }
  if (i >= 100) {
    break;
  }
  console.log(i);
  i++;
}
