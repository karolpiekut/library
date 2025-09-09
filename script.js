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

//buttons query selectors 
let queueButtonSelector = document.querySelector('#queueButton');
let booksButtonSelector = document.querySelector('#booksButton');
let authorsButtonSelector = document.querySelector('#authorsButton');
let readButtonSelector = document.querySelector('#readButton');

//bodyDiv
let bodyTable = document.createElement('table');
bodyTable.setAttribute('id', 'bodyTable');
bodyDiv.appendChild(bodyTable);

//table headers 




let authorTable = `
<tr>
  <th id='authorId'>id</th>
  <th id='authorName'>Name</th>
  <th id='authorSurname'>Surname</th>
</tr>
`;


let queueTable;

//functions

function generateAuthorsHeader() {
  let authorHeader = document.createElement('tr');

  let authorIdHeader = document.createElement('th');
  authorIdHeader.setAttribute('id', 'authorName');
  authorIdHeader.innerText = 'id';
  authorHeader.appendChild(authorIdHeader);

  let authorNameHeader = document.createElement('th');
  authorNameHeader.setAttribute('id', 'authorName');
  authorNameHeader.innerText = 'Name';
  authorHeader.appendChild(authorNameHeader);

  let authorSurnameHeader = document.createElement('th');
  authorSurnameHeader.setAttribute('id', 'authorSurname');
  authorSurnameHeader.innerText = 'Surname';
  authorHeader.appendChild(authorSurnameHeader);

  return authorHeader;
}


function displayTableContent() {
  let selectTable = document.querySelector('#bodyTable');
  selectTable.appendChild(generateAuthorsHeader());
}


displayTableContent();



