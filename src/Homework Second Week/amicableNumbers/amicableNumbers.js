let amicableNumbers = (numberOne, numberTwo) => {
    let result = 0,sum = 0
    for(let i=1;i<numberOne;i++){
        if(numberOne % i == 0){
            result += i;
        }
    }
    for(let i=1;i<numberTwo;i++){
        if(numberTwo % i == 0){
            sum += i;
        }
    }
    console.log((sum == numberOne && result == numberTwo) ? "Amicable Numbers!!!" : "Not Amicable Numbers")
}

amicableNumbers(284,220)