const n = 28;
let num = Number(prompt("Enter a number from 1 to 100"));

while (num !== n) {
  if (num > n) {
    num = Number(prompt("Enter a smaller value"));
  } else {
    num = Number(prompt("Enter a larger number"));
  }
}

alert("Yayyy! You have successfully guessed the number!");
