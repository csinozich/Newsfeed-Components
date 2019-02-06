const toggleMenu = () => {
  menu.classList.toggle('.menu');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
console.log(menuButton);
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', this.toggleMenu);



// class menuButtons {
//
//   constructor(newButton) {
//     this.menu = newButton.querySelector('.menu');
//     this.menuButton = newButton.querySelector('.menu-button')
//     this.menuButton.addEventListener('click', this.toggleMenu)
//   }
//
//   toggleMenu() {
//     this.menuButton.classList.toggle('.menu')
//   }
//
// }
