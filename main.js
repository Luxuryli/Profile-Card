function currentTime() {
      var currentDate = new Date();
      var hours = currentDate.getUTCHours();
      var minutes = currentDate.getUTCMinutes();
      var seconds = currentDate.getUTCSeconds();
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      var timeString = hours + ":" + minutes + ":" + seconds;
      document.getElementById("currentTimeUTC").innerHTML = timeString;
}
setInterval(currentTime, 1000);

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const currentDay = new Date();
let day = weekday[currentDay.getDay()];
document.getElementById("currentDay").innerHTML = day;

