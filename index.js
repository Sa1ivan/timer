window.addEventListener("DOMContentLoaded", () => {
  const interval = setInterval(renderTime, 1000);
  let sec = 0,
    min = 0,
    hour = 0;

  function getTime() {
    if (sec && sec === 59) {
      min++;
      if (min && min === 59) {
        hour++;
        if (hour && hour > 99) {
          clearInterval(interval);
        }
        min = -1;
        min++;
      }
      sec = -1;
    }
    sec++;
  }

  function checkTime(num) {
    if (num === 0 || num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function renderTime() {
    getTime();
    console.log(`${checkTime(hour)}:${checkTime(min)}:${checkTime(sec)}`);
  }
});
