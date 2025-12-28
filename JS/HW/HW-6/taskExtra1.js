function avarageArr(arr) {
  console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    arr.length);

}

avarageArr([3, 5, 7])