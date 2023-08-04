const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    timerId = setInterval(() => {
       
            const randomColor = getRandomHexColor();
        document.body.style.background = randomColor;
        
  }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
      startBtn.disabled = false;
});

