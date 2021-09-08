import { toDoArray } from '../mainHelpers.js';
import { printToDos } from '../print/print';

const sidebarColors = document.querySelectorAll('.sidebar-farbe');
sidebarColors.forEach((color) =>
  color.addEventListener('click', filterNachFarbe)
);

function filterNachFarbe(e) {
  const color = e.target.getAttribute('data-tag-color');
  console.log(color, 'is just clicked');
  const sameColorItems = () => toDoArray.filter((item) => item.tag == color);
  console.log('Listing', sameColorItems(), 'colored item');
  printToDos(sameColorItems());
}
export { filterNachFarbe };
