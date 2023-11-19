import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('.form input[name="delay"]'),
  step: document.querySelector('.form input[name="step"]'),
  amount: document.querySelector('.form input[name="amount"]'),
  btnSubmit: document.querySelector('.form button[type="submit"]')
};

refs.form.addEventListener("submit", function (event) {
  event.preventDefault();
  createPromises();
});



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    
  const shouldResolve = Math.random() > 0.3;
 
   setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}


function createPromises() {
const delay = parseInt(refs.delay.value);
  const step = parseInt(refs.step.value);
  const amount = parseInt(refs.amount.value);


  for (let i = 1; i <= amount; i++) {
    const position = i;
    const currentDelay = delay + (i - 1) * step;

    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
      });
  }
}

