const board = document.querySelector('#board');
const colors = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
const SQUARS_NUMBER = 500;

for (let i = 0; i < SQUARS_NUMBER; i++){
  const square = document.createElement('div');
  square.classList.add('squar');

  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeColor)

  board.append(square);
}

function setColor(event) {

  const element = event.target;
  const color = getRandomColor()

  element.style.backgroundColor = color;

  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {

  const element = event.target;

  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[index = Math.floor(Math.random() *colors.length)]
}