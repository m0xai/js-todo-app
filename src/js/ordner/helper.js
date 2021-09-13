function setInputOrdners(ordners) {
  console.log('Ordners in setInputOrdners: ', ordners);
  const ordnersInput = document.getElementById('todo-ordner-input');
  ordners.forEach((ordner) => {
    ordnersInput.insertAdjacentHTML(
      'beforeend',
      `
      <option value="${ordner.name}">${ordner.name}</option>
    `
    );
  });
}

export { setInputOrdners };
