const getSleepHours = (day) => {
    switch (day) {
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 6;
        break;
      case "wednesday":
        return 7;
        break;
      case "thursday":
        return 7;
        break;
      case "friday":
        return 5;
      case "saturday":
        return 10;
        break;
      case "sunday":
        return 20;
        break;
    }
  };
  const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  const getIdealSleepHours = () => {
    const idealHours = 9;
    return idealHours * 7;
  };
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
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
  