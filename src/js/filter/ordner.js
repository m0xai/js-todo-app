import { toDoArray } from '../mainHelpers.js';
import { printToDos } from '../print/print.js';

const sidebarColors = document.querySelectorAll('.sidebar-ordner');
sidebarColors.forEach((ordner) =>
  ordner.addEventListener('click', filterNachOrdner)
);

function filterNachOrdner(e) {
  const ordner = e.target.getAttribute('data-sidebar-ordner');
  console.log(ordner, 'Ordner is just clicked');
  function sameOrdnerItems() {
    return toDoArray.filter(
      (item) => item.ordner.toLowerCase() == ordner.toLowerCase()
    );
  }
  console.log('Listing', sameOrdnerItems(), 'ordnered item');
  printToDos(sameOrdnerItems());
}
export { filterNachOrdner };
