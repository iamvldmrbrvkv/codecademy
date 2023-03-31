let raceNumber = Math.floor(Math.random() * 1000);
let registration = true;
let age = 18;
if (age > 18 && registration) {
  raceNumber += 1000;
}
if (age > 18 && registration) {
  console.log("You will race at 9:30 am");
} else if (age > 18 && !registration) {
  console.log("You will race at 11:00 am");
} else if (age < 18 && registration) {
  console.log(`You will race at 12:30 pm, and your number is ${raceNumber}`);
} else {
  console.log("Please check the registration desk for more details");
}
