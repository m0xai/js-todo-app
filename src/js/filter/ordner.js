import { toDoArray } from '../db/db.js';
import { printToDos } from '../print/print.js';

function addClickEventToOrdners() {
  const sidebarOrdners = document.querySelectorAll('.sidebar-ordner');
  sidebarOrdners.forEach((ordner) =>
    ordner.addEventListener('click', filterNachOrdner)
  );
}

function filterNachOrdner(e) {
  addClickEventToOrdners();
  const ordner = e.target.getAttribute('data-sidebar-ordner');
  console.log('ordner name from Click', ordner);
  const sameOrdnerItems = () => {
    let items = [];
    toDoArray.forEach((item) => {
      if (item.ordner.toLowerCase() == ordner.toLowerCase()) {
        items.push(item);
      }
    });
    console.log('items', items);
    return items;
  };
  console.log('Listing', sameOrdnerItems(), 'ordnered item');
  printToDos(sameOrdnerItems());
}
export { filterNachOrdner, addClickEventToOrdners };
