const container = document.querySelector('#container');
const containerWidth = 500;
const containerHeight = 500;



function buildGrid(size){
  for (let i = 1; i <= (size**2); i++) {
    const gridBox = document.createElement('div');
      gridBox.style.height = `${containerHeight/size}px`;
      gridBox.style.width = `${containerWidth/size}px`;
      container.appendChild(gridBox);
      gridBox.addEventListener('mouseover', paint);
  }
}

function paint(e) {
  e.target.classList.add('on');
  e.target.style.background = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')';
  e.target.style.opacity = 1;
}

function clear(e){
    const colored=Array.from(document.querySelectorAll(".on"));
    colored.forEach(element => {element.style.background=""; element.classList.remove("on");});
    opacity=0.1;
}

function newGrid(e) {
  let newSquares = prompt('How many sqares per side: ');
  let div = Array.from(document.querySelectorAll('#container div'));
  div.forEach(elem => {elem.remove();});
  buildGrid(newSquares);
}

buildGrid(16);
