function printText(defText, t) {
  setTimeout(() => console.log(`Added text is: ${defText}`), t);
}

printText("new user is authorized", 1500);
