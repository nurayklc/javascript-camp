function findPrime(...numbers) {
  let result = []
  for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        count++;
      }
    }
    if (count == 0 && (numbers[i] != 1)) {
      result.push(numbers[i])
    }
  }
  console.log( `findPrime(${result})`)
}

findPrime(1, 2, 5, 31, 6, 17);
