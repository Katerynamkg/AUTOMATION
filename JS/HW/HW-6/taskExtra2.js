let numbers = [1, 10, 14, 2, 4, 5, 43, 34];
let sortNum = numbers.sort((c, b) => c - b);
let difference = sortNum[sortNum.length-1] - sortNum[0]
console.log(difference)
console.log(sortNum)
