const getTimeString = ({ hours, minutes, seconds, zone}) => {
    if (minutes / 10 < 1) {
        minutes = "0" + minutes;
    }
    if (seconds / 10 < 1) {
        seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds} ${zone}`;
};

const renderTime = () => {
    let currentTime = document.getElementById("current-time");
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let zone = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
        hours = hours % 12;
    }
    const timeString = getTimeString({ hours, minutes, seconds, zone });
    currentTime.innerHTML = timeString;
};

setInterval(renderTime, 1000);