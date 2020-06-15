const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

input.oninput = function() {
  const textSize = input.value;
  text.style.cssText = `font-size: ${textSize}px`;
};
