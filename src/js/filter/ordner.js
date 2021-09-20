import { toDoArray } from '../db/db.js';
import { showRemoveOrdnerBtn } from '../ordner/helper.js';
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
  const ordnerId = e.target.getAttribute('data-side-ordner-id');
  console.log('ordner name from Click', ordner);
  const sameOrdnerItems = () => {
    let items = [];
    toDoArray.forEach((item) => {
      if (item.ordner.toLowerCase() == ordner.toLowerCase()) {
        items.push(item);
      }
    });
    console.log('Filtering nach Ordner:', items);
    return items;
  };
  console.log('Listing', sameOrdnerItems(), 'ordnered item');
  printToDos(sameOrdnerItems());
  showRemoveOrdnerBtn(ordnerId);
}
export { filterNachOrdner, addClickEventToOrdners };
