const DrawerInitiator = {
  init({ button, nav, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, nav);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, nav);
    });
  },

  _toggleDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.toggle('active');
  },

  _closeDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.remove('active');
  },
};

export default DrawerInitiator;
