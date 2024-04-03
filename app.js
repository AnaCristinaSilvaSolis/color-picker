const inputColor = document.querySelector('#inputColor');
const btnVisualizar = document.querySelector('#btnVisualizar');
const pHexa = document.querySelector('#pHexa');
const cardColor = document.querySelector('#cardColor');

btnVisualizar.addEventListener('click', () => {
  console.log('me diste click');
  console.log(inputColor.value);
  pHexa.textContent = inputColor.value;
  cardColor.style.backgroundColor = inputColor.value;
});