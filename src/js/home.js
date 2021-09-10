import '../css/main.css';
import smJumboImageSrc from '../img/internet-6523289_640.jpg';
import lgJumboImageSrc from '../img/landscape-5426755_1280.jpg';

import '../css/home.css';
const hello = 'Hello World';

console.log(hello);

const jumboImageWrapper = document.getElementById('jumbo-image-wrapper');

const jumboImage = new Image();
jumboImage.src = lgJumboImageSrc;
jumboImage.alt = 'To Do App Screen Shot';
jumboImage.loading = 'lazy';
jumboImage.classList.add('img-fluid');
jumboImageWrapper.appendChild(jumboImage);

export { hello };
