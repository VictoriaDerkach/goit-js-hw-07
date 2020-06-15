let counter = 0;
const counterValue = document.querySelector('#value');
const decButton = document.querySelector('button[data-action=decrement]');
const incButton = document.querySelector('button[data-action=increment]');

const decrement = function() {
  counter -= 1;
  counterValue.innerText = counter;
};
const increment = function() {
  counter += 1;
  counterValue.innerText = counter;
};

decButton.addEventListener('click', decrement);
incButton.addEventListener('click', increment);
