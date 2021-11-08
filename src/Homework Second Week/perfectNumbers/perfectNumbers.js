function perfect (){
  let arr = [];
  for (let i = 1; i < 1000; i++) {
    let result = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        result += j;
      }
    }
    if (result == i) {
      arr.push(i);
    }
  }
  console.log(arr);
};

perfect();
