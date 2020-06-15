const input = document.getElementById('validation-input');

function handleInputFocus() {
  input.classList.remove('invalid', 'valid');
}

function handleInputBlur() {
  if (input.value.length === input.dataset.length) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}
input.addEventListener('focus', handleInputFocus);
input.addEventListener('blur', handleInputBlur);
