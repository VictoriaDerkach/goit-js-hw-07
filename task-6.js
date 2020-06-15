const input = document.getElementById('validation-input');

function handleInputFocus() {
  input.classList.remove('invalid', 'valid');
}

function handleInputBlur() {
  if (input.value.length < input.dataset.length) {
    input.classList.add('invalid');
  } else {
    input.classList.add('valid');
  }
}
input.addEventListener('focus', handleInputFocus);
input.addEventListener('blur', handleInputBlur);
