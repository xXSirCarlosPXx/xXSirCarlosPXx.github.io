const seconds = document.querySelector(".seconds .number");
      minutes = document.querySelector(".minutes .number");
      hours = document.querySelector(".hours .number");
      days = document.querySelector(".days .number");

const secondst = document.querySelector(".seconds .text");
      minutest = document.querySelector(".minutes .text");
      hourst = document.querySelector(".hours .text");
      dayst = document.querySelector(".days .text");

const countdownDate = new Date('May 2, 2025 00:00:00').getTime();

let interval = setInterval(function(){
    const now = new Date().getTime();
    let distance = countdownDate - now;
    let dayValue = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hourValue = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secValue = Math.floor((distance % (1000 * 60)) / (1000));

    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    secondst.textContent = secValue == 1 ? "segundo" : "segundos";
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    minutest.textContent = minValue == 1 ? "minuto" : "minutos";
    hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    hourst.textContent = hourValue == 1 ? "hora" : "horas";
    days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
    dayst.textContent = dayValue == 1 ? "día" : "días";

    if (dayValue === 0 && hourValue === 0 && minValue === 0 && secValue === 0) {
        clearInterval(interval);
    }
}, 1000);
