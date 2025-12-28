
function getSmall(num) {
  if (num >= 0) {

    console.log(num)
    num --;
    getSmall(num)
  }
}

getSmall(5)