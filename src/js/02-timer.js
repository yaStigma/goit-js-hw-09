import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    inputElem: document.querySelector("#datetime-picker"),
    btnStart: document.querySelector("[data-start]"),
    daysElem: document.querySelector("[data-days]"),
    hoursElem: document.querySelector("[data-hours]"),
    minutesElem: document.querySelector("[data-minutes]"),
    secondsElem: document.querySelector("[data-seconds]"),
};

let selectedDate;

refs.btnStart.disabled = true;
  
    const options = {
        enableTime: true, //можливість вибору часу
        time_24hr: true,  // 24 години або 12 pm am
        defaultDate: new Date(), // встанослює початкову дату або обрану дату 
        minuteIncrement: 1, // крок вводу хвилин
        onClose(selectedDates) {
          const selectedDate = selectedDates[0];

        if (selectedDate <= new Date()) {
      window.alert("Please choose a date in the future");
    } else {
      refs.btnStart.disabled = false;
      selectedDate.setSeconds(0);
    }
        console.log(selectedDate);
    },  //функція, яка спрацьовує кожен раз при закритті календарю. виводить значення у консоль
    }

flatpickr("#datetime-picker", options);

refs.btnStart.addEventListener("click", () => {
  selectedDate = refs.inputElem._flatpickr.selectedDates[0];
   const timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    const ms = selectedDate - new Date();
    if (ms <= 0) {
      clearInterval(timerInterval);
    } else {
      const { days, hours, minutes, seconds } = convertMs(ms);
      renderTimer({ days, hours, minutes, seconds });
    }
  }
});


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);


  return { days, hours, minutes, seconds };
}


function renderTimer({ days, hours, minutes, seconds }) {
  refs.daysElem.textContent = addLeadingZero(days);
  refs.hoursElem.textContent = addLeadingZero(hours);
  refs.minutesElem.textContent = addLeadingZero(minutes);
  refs.secondsElem.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}