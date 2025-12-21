
function divide(numerator, denominator) {
  if (
    typeof numerator !== "number" ||
    typeof denominator !== "number" ||
    Number.isNaN(numerator) ||
    Number.isNaN(denominator)
  ) {
    throw new Error(`You don't enter a number`);
  }
  if (denominator === 0) {
    throw new Error(`You can't devide to 0`);
  } else {
    let result = numerator / denominator;
    return result;
  }
}
try {
  let res = divide(10, 2);
  console.log(res);
} catch (error) {
  console.error("Сталася помилка:", error.message);
} finally {
  console.log(`Done`);
}

try {
  let res = divide(10, "qqq");
  console.log(res);
} catch (error) {
  console.error("Сталася помилка:", error.message);
} finally {
  console.log(`Done`);
}

try {
  let res = divide(10, 0);
  console.log(res);
} catch (error) {
  console.error("Сталася помилка:", error.message);
} finally {
  console.log(`Done`);
}