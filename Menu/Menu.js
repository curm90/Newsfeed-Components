/* This is the data we will be using, study it but don't change anything, yet. */
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function menuComponent(menuArr) {
  // Create elements
  const menu = document.createElement('div');
  const list = document.createElement('ul');

  // Add class to menu
  menu.classList.add('menu');

  // Loop over given array and create a list item for each item in the array
  // And append list items to list element
  menuArr.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;

    list.appendChild(listItem);
  })

  // Grab the menu button and store in a variable
  const menuButton = document.querySelector('.menu-button');

  // Add a click event listener and toggle the menu--open class
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  })

  // Append list to menu and menu to DOM
  menu.appendChild(list);
  document.querySelector('.header').appendChild(menu);

  // Return menu
  return menu;
}

menuComponent(menuItems);