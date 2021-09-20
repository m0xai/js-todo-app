import { toDoArray } from '../db/db.js';
import { changeContentTitle } from '../mainHelpers.js';
import { printToDos } from '../print/print.js';

const sidebarColors = document.querySelectorAll('.sidebar-farbe');
sidebarColors.forEach((color) =>
  color.addEventListener('click', filterNachFarbe)
);

function filterNachFarbe(e) {
  const color = e.target.getAttribute('data-tag-color');
  console.log(color, 'is just clicked');
  const sameColorItems = () => {
    let colorItem = toDoArray.filter((item) => item.tag == color);
    return colorItem;
  };
  console.log('Listing', sameColorItems(), 'colored item');
  printToDos(sameColorItems());
  changeContentTitle(e.target.innerText);
}
export { filterNachFarbe };
