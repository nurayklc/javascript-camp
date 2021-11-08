function prime() {
  let result = [];
  for (let i = 2; i < 1000; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 0 && i != 1) {
      result.push(i);
    }
  }
  console.log(result);
}

prime();
