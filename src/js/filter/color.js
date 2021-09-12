import { toDoArray } from '../db/db.js';
import { printToDos } from '../print/print.js';

const sidebarColors = document.querySelectorAll('.sidebar-farbe');
sidebarColors.forEach((color) =>
  color.addEventListener('click', filterNachFarbe)
);

function filterNachFarbe(e) {
  const color = e.target.getAttribute('data-tag-color');
  console.log(color, 'is just clicked');
  // const sameColorItems = () => toDoArray.filter((item) => item.tag == color);
  const sameColorItems = () => {
    let colorItem;
    for (let todo in toDoArray) {
      if (todo[tag] == color) {
        colorItem = color;
      }
    }
    return colorItem;
  };
  console.log('Listing', sameColorItems(), 'colored item');
  printToDos(sameColorItems());
}
export { filterNachFarbe };
