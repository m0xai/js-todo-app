import darkModeIcon from '../img/icons/moon.svg';
import delIcon from '../img/icons/delete.svg';
import editIcon from '../img/icons/edit.svg';
import logo from '../img/icons/logo.svg';
import menuIcon from '../img/icons/menu.svg';
import menuIconLight from '../img/icons/menuLight.svg';

// Init Image Creator Function
function imgMaker(url, parentId) {
  console.log('Making images...');
  const img = document.createElement('img');
  const parent = document.getElementById(parentId);
  img.src = url;
  parent.insertAdjacentElement('afterbegin', img);
}

// Invoke Function for each element and parent
const iconUrls = [darkModeIcon, logo];
const iconParents = ['toggle-dark-mode', 'navbar-logo'];
for (let i = 0; i < iconParents.length; i++) {
  imgMaker(iconUrls[i], iconParents[i]);
}

export { delIcon, editIcon, menuIconLight, menuIcon };
