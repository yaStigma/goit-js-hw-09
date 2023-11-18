const refs = {
    body: document.body,
btnStart: document.querySelector("[data-start]"),
btnStop: document.querySelector("[data-stop]"),
}
let timerId = null;

refs.btnStart.addEventListener("click", () => {
if (!timerId) {
        refs.btnStart.disabled = true;

        timerId = setInterval(() => {
            const randomColor = getRandomHexColor();
            refs.body.style.backgroundColor = randomColor;
        }, 1000);
    }
});

refs.btnStop.addEventListener("click", () => {
    clearInterval(timerId);
      timerId = null;
    refs.btnStart.disabled = false;
  });



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
//         