
const container = document.getElementById('container');

const secondItems = document.querySelectorAll('.second');

const thirdInOl = document.querySelector('ol .third');

container.textContent = "Hello!";
const footerDiv = document.querySelector('.footer');
footerDiv.classList.add('main');
footerDiv.classList.remove('main');
const newLi = document.createElement('li');
newLi.textContent = "four";
const ul = container.querySelector('ul');
ul.appendChild(newLi);
