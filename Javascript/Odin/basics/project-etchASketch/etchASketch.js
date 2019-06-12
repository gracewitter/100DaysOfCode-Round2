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
  e.target.style.background = 'black';
  e.target.style.opacity = 1;
}

buildGrid(16);
