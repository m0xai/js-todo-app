import '../css/main.css';
import lgJumboImageSrc from '../img/home-mockup.png';

import '../css/home.css';
const hello = 'Hello World';

const jumboImageWrapper = document.getElementById('jumbo-image-wrapper');

const jumboImage = new Image();
jumboImage.src = lgJumboImageSrc;
jumboImage.alt = 'To Do App Screen Shot';
jumboImage.loading = 'lazy';
jumboImage.classList.add('img-fluid');
jumboImage.setAttribute('id', 'home-jumbo-img');
jumboImageWrapper.appendChild(jumboImage);

const loslegenBtn = document.getElementById('loslegen-button');
loslegenBtn.addEventListener('click', () => {
  window.location.href = '/app.html';
});

// To prevent importing all codes and functionalitys don't call handleLogIn function. Instead just rediret to dashboard. You can redirect if user == false, After clicking log out, just redirect home, where no functions live.

console.log(hello);
export { hello };
