const numbers = [];
while (numbers.length < 5) {
  const number = parseInt(prompt(`Enter ${numbers.length + 1} number:`));
  if (!isNaN(number)) numbers.push(number);
  else console.log("Invalid entry. Please re-enter.");
}
const choice = prompt("Choose LIFO or FIFO:").toUpperCase();
if (choice === "LIFO") {
} else if (choice === "FIFO") {
  console.log("First in, First out");

  numbers.forEach((n) => console.log(n));
} else {
  console.log("Invalid Input.");
}
