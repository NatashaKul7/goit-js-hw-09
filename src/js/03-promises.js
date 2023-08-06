import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  delayStep: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]')
};

console.log(refs);

refs.form.addEventListener('submit', onSubmit);


function onSubmit(e) { 
  e.preventDefault();

  let delay = Number(refs.firstDelay.value);
  const step = Number(refs.delayStep.value);
  const amount = Number(refs.amountInput.value);

  console.log(delay, step, amount);

  for (let i = 1; i <= amount; i += 1) { 
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step; 
  } 

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
 
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
  });
  
}
