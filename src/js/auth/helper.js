let useRouter = (state) => {
  if (state == true) {
    if (window.location.pathname != '/app.html')
      window.location.href = '/app.html';
  }
  if (state == false) {
    if (window.location.pathname == '/app.html') {
      window.location.href = '/';
    }
  }
};

let getUserId = () => {
  return document.getElementById('navbar-user-name').getAttribute('data-uid');
};
export { useRouter, getUserId };
