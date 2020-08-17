const dropdownMenu = (() => {
  function show(dropdown) {
    dropdown.querySelector('.dropdownContent').classList.add('show');
    console.log('a');
  }

  return {
    show,
  };
})();

const dropdownMenues = document.querySelectorAll('.dropdown');
dropdownMenues.forEach((menu) => {
  menu.addEventListener('click', function () { dropdownMenu.show(this); });
});

window.addEventListener('click', () => {

});
