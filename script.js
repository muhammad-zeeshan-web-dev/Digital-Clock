// Digital Clock

function updateClock() {


    const now = new Date();

    let hours = now.getHours();

    const meridiem = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12;

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString =
        `${hours.toString().padStart(2, "0")}:` +
        `${minutes.toString().padStart(2, "0")}:` +
        `${seconds.toString().padStart(2, "0")} ${meridiem}`;

    document.getElementById("clock").textContent = timeString;

}

updateClock();

setInterval(updateClock, 1000);
