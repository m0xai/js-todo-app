import halfmoon from 'halfmoon';
import darkModeIcon from '../img/icons/moon.svg';
import delIcon from '../img/icons/delete.svg';
import editIcon from '../img/icons/edit.svg';
import logo from '../img/icons/logo.svg';
import menuIcon from '../img/icons/menu.svg';
import menuIconLight from '../img/icons/menu-light.svg';
import downButton from '../img/icons/down.svg';
import downButtonLight from '../img/icons/down-light.svg';

// Change icons on different light modes
const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
if (halfmoon.getPreferredMode() == 'light-mode') {
  console.log('Light Mode is on');
  imgMaker(menuIcon, 'sidebar-toggle-btn');
  imgMaker(downButton, 'down-arrow-icon');
} else if (halfmoon.getPreferredMode() == 'dark-mode') {
  imgMaker(menuIconLight, 'sidebar-toggle-btn');
  imgMaker(downButtonLight, 'down-arrow-icon');
  console.log('Dark mode is on');
} else if (halfmoon.getPreferredMode() == 'not-set') {
  console.log('Dark mode is unset.');
}
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
