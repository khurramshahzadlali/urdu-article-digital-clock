// Get elements
const hourSpan = document.getElementById("hour");
const minuteSpan = document.getElementById("minutes");
const secondSpan = document.getElementById("seconds");
const ampmSpan = document.getElementById("ampm");
const dateSpan = document.getElementById("date");

// Update time every second
function updateTime() {
  // Get current time
  const now = new Date();

  // Get hour, minute, and second
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Get AM or PM
  const ampm = hour >= 12 ? "PM" : "AM";

  // Get date
  const date = now.toDateString();

  // Update time values in the HTML
  hourSpan.innerText = formatTime(hour % 12 || 12);
  minuteSpan.innerText = formatTime(minute);
  secondSpan.innerText = formatTime(second);
  ampmSpan.innerText = ampm;
  dateSpan.innerText = date;
}

// Format time to add leading zero if needed
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Run updateTime every second
setInterval(updateTime, 1000);

// Run updateTime initially
updateTime();
