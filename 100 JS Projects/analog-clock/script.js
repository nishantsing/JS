const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function showTime() {
    const currentDate = new Date();
    const second = currentDate.getSeconds();
    const minute = currentDate.getMinutes();
    const hour = currentDate.getHours();
    const timeInterval = 6;
    secondHand.style.transform = `rotate(${second * timeInterval}deg)`;
    minuteHand.style.transform = `rotate(${
        minute * timeInterval + second / 10
    }deg)`;
    hourHand.style.transform = `rotate(${hour * 30 + minute / 2}deg)`;
}

setInterval(showTime, 100);
