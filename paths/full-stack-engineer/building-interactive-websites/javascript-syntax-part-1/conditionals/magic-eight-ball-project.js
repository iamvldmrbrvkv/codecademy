let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
let answers = [
  "It is certain",
  "It is decidedly so",
  "Reply hazy try again",
  "Cannot predict now",
  "Do not count on it",
  "My sources say no",
  "Outlook not so good",
  "Signs point to yes",
];
answers[randomNumber];
eightBall = answers[randomNumber];

console.log(`Magic Ball's answers is - ${eightBall}`);
