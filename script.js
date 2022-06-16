// Countdown Timer
const countdown = () => {
    const countDate = new Date("July 7, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const timegap = countDate - now;
    // In milliseconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Calculation
    const valueDay = Math.floor(timegap / day);
    const valueHour = Math.floor((timegap % day) / hour);
    const valueMinute = Math.floor((timegap % hour) / minute);
    const valueSecond = Math.floor((timegap % minute) / second);
    // Changing Text
    document.querySelector(".days-value").innerText = valueDay;
    document.querySelector(".hours-value").innerText = valueHour;
    document.querySelector(".minutes-value").innerText = valueMinute;
    document.querySelector(".seconds-value").innerText = valueSecond;
};
setInterval(countdown, 1000);