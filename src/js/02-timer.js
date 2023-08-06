import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.getElementById('datetime-picker');
const btnStart = document.querySelector('[data-start]');

const refs = {
    daysValue: document.querySelector('[data-days]'),
    hoursValue: document.querySelector('[data-hours]'),
    minutesValue: document.querySelector('[data-minutes]'),
    secondsValue: document.querySelector('[data-seconds]'),
};


btnStart.addEventListener('click', onStartTimer);
btnStart.disabled = true;


let currentDate = null;
let selectedDate = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
      selectedDate = selectedDates[0];
      currentDate = new Date();

      if (selectedDate > currentDate) {
          btnStart.disabled = false;
      } else { 
        Notify.failure("Please choose a date in the future");
      };
  },
};


flatpickr(input, options);


function onStartTimer() { 
    btnStart.disabled = true;

    let timer = setInterval(() => {
        let timeDifference = new Date(input.value) - new Date();
        input.disabled = true;

        if (timeDifference >= 0) {
        let convertedTime = convertMs(timeDifference);

        refs.daysValue.innerText = convertedTime.days;
        refs.hoursValue.innerText = convertedTime.hours;
        refs.minutesValue.innerText = convertedTime.minutes;
        refs.secondsValue.innerText = convertedTime.seconds;
        } else { 
        clearInterval(timer);
        };
    }, 1000);
};


function pad(value) { 
    return String(value).padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};