import '../css/main.css';
import lgJumboImageSrc from '../img/landscape-5426755_1280.jpg';
import { handleSignIn } from './auth/auth.js';

import '../css/home.css';
const hello = 'Hello World';

const jumboImageWrapper = document.getElementById('jumbo-image-wrapper');

const jumboImage = new Image();
jumboImage.src = lgJumboImageSrc;
jumboImage.alt = 'To Do App Screen Shot';
jumboImage.loading = 'lazy';
jumboImage.classList.add('img-fluid');
jumboImageWrapper.appendChild(jumboImage);

const loslegenBtn = document.getElementById('loslegen-button');
loslegenBtn.addEventListener('click', () => {
  handleSignIn();
});

console.log(hello);
export { hello };
