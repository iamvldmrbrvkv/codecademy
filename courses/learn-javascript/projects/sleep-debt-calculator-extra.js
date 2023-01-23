const getActualSleepHours = () => 8 + 6 + 7 + 7 + 5 + 10 + 20;
const getIdealSleepHours = (idealHours) => idealHours * 7;
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9);

  if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less. We need power, sleep more!"
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "Look at your face, you slept for " +
        (actualSleepHours - idealSleepHours) +
        " hour(s) more than you need"
    );
  } else {
    console.log("Amazing");
  }
};
calculateSleepDebt();
