const currentTime = document.querySelector("h1"),                                               // Created a variable for the h1 tag, content class, select tag and button tag in HTML
    content = document.querySelector(".content"),                                               
    selectMenu = document.querySelectorAll("select"),
    setAlarmBtn = document.querySelector("button");
let alarmTime, isAlarmSet,                                                                      // Set variable for the ringtone to play when the alarm is set
    ringtone = new Audio("alarm.wav");
for (let i = 12; i > 0; i--) {                                                                  // Loop so the dropdown for Hour stops at 12
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {                                                                 // Loop so the dropdown for Minute stops at 59
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {                                                                   // Loop so the dropdown for AM and PM
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
setInterval(() => {                                                                             // Getting the current time with an if statement to sound the alarm if the alarm time matches
    let date = new Date(),                                                                      // the current time
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";
    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play("alarm.wav");
        ringtone.loop = true;
    }
});
function setAlarm() {                                                                           //Function for setting the alarm and giving an error if the alarm was set incorrectly
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;                                                                           // Clears and stops the alarm from sounding
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
}
setAlarmBtn.addEventListener("click", setAlarm);                                                // Event listener for activating the setAlarm function once the button is clicked