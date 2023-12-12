function startCountdown() {
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  // Set the initial time to 24 hours in milliseconds
  let timeRemaining = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  const interval = setInterval(() => {
    timeRemaining -= 1000; // Decrement by 1 second (1000 milliseconds)

    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);

    if (timeRemaining < 0) {
      clearInterval(interval);
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";
    }
  }, 1000);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

startCountdown();
