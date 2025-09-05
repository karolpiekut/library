let appDiv = document.querySelector('#app');

let menuDiv = document.createElement('div');
menuDiv.setAttribute('id', 'menuDiv');
appDiv.appendChild(menuDiv);

let bodyDiv = document.createElement('div');
bodyDiv.setAttribute('id', 'bodyDiv');
appDiv.appendChild(bodyDiv);

//menuDiv
let menuDivLogo = document.createElement('div');
menuDivLogo.setAttribute('id', 'menuDivLogo');
menuDiv.appendChild(menuDivLogo);

let logoText = document.createElement('h1');
logoText.setAttribute('id', 'logoText');
logoText.innerText = '.library';
menuDivLogo.appendChild(logoText);

let menuDivButtonsDiv = document.createElement('div');
menuDivButtonsDiv.setAttribute('id', 'menuDivButtonsDiv');
menuDiv.appendChild(menuDivButtonsDiv);

let queueButton = document.createElement('button');
queueButton.setAttribute('id', 'queueButton');
menuDivButtonsDiv.appendChild(queueButton);
queueButton.innerText = 'queue';

let booksButton = document.createElement('button');
booksButton.setAttribute('id', 'booksbutton');
menuDivButtonsDiv.appendChild(booksButton);
booksButton.innerText = 'books';

let authorsButton = document.createElement('button');
authorsButton.setAttribute('id', 'authorsButton');
menuDivButtonsDiv.appendChild(authorsButton);
authorsButton.innerText = 'authors';

let readButton = document.createElement('button');
readButton.setAttribute('id', 'readButton');
menuDivButtonsDiv.appendChild(readButton);
readButton.innerText = 'read';



