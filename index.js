format = 0;
function updateClock() {
  const time = new Date();
  let hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  if (format == 0) {
    ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
    }
    hours = hours % 12;
    if (hours == 0) {
      hours = 12;
    }
  }
  document.getElementById("hour").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("ampm").innerText = ampm;
}

function change() {
  if (format == 1) {
    format = 0;
    document.getElementById("ampm").style.display = "inline";
  } else {
    format = 1;
    document.getElementById("ampm").style.display = "none";
  }
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
