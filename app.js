function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secounds = date.getSeconds();
    let timeFormet = "AM";

    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        timeFormet = "PM"
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secounds = secounds < 10 ? "0" + secounds : secounds;


    document.getElementById("hours").innerText = `${hours}`;
    document.getElementById("minutes").innerText = `${minutes}`;
    document.getElementById("secounds").innerText = `${secounds}`;


    setInterval(digitalClock, 1000);
};
digitalClock()