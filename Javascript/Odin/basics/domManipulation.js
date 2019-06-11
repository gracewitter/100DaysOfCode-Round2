const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.createElement('p');
redText.textContent = "Hey I'm red!";
redText.style.color = 'red';
container.appendChild(redText);

let blueText = document.createElement('h3');
blueText.textContent = "I'm a blue h3!";
blueText.style.color = 'blue';
container.appendChild(blueText);

let pinkDiv = document.createElement('div');
pinkDiv.style.backgroundColor = 'pink';
pinkDiv.style.border = '1px solid black';
container.appendChild(pinkDiv);

let divTitle = document.createElement('h1');
divTitle.textContent = "I'm in a div";
pinkDiv.appendChild(divTitle);

let divText = document.createElement('p');
divText.textContent = "ME TOO!";
pinkDiv.appendChild(divText);

var btn = document.querySelector('#btn');
btn.onclick = () => alert('alert');

var btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function(e){
  alert(e.target);
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    alert(button.id)
  })
})
