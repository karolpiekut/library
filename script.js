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
booksButton.setAttribute('id', 'booksButton');
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

//bodyDiv
let bodyTable = document.createElement('table');
bodyTable.setAttribute('id', 'bodyTable');
bodyDiv.appendChild(bodyTable);

//querySelectors
let queueButtonSelector = document.querySelector('#queueButton');
let booksButtonSelector = document.querySelector('#booksButton');
let authorsButtonSelector = document.querySelector('#authorsButton');
let readButtonSelector = document.querySelector('#readButton');
let bodyTableSelector = document.querySelector('#bodyTable');

//functions
function generateAuthorsHeader() {
    let authorHeader = document.createElement('tr');

    let authorId = document.createElement('th');
    authorId.setAttribute('id', 'id');
    authorId.innerText = 'id';
    authorHeader.appendChild(authorId);

    let authorName = document.createElement('th');
    authorName.setAttribute('id', 'authorName');
    authorName.innerText = 'Name';
    authorHeader.appendChild(authorName);

    let authorSurname = document.createElement('th');
    authorSurname.setAttribute('id', 'authorSurname');
    authorSurname.innerText = 'Surname';
    authorHeader.appendChild(authorSurname);

    return authorHeader;
}

function generateQueueHeader() {
    let queueHeader = document.createElement('tr');

    let queue = document.createElement('th');
    queue.setAttribute('id', 'queue');
    queue.innerText = 'Queue';
    queueHeader.appendChild(queue);

    let title = document.createElement('th');
    title.setAttribute('id', 'title');
    title.innerText = 'Title';
    queueHeader.appendChild(title);

    let author = document.createElement('th');
    author.setAttribute('id', 'author');
    author.innerText = 'Author';
    queueHeader.appendChild(author);

    let type = document.createElement('th');
    type.setAttribute('id', 'type');
    type.innerText = 'Type';
    queueHeader.appendChild(type);

    return queueHeader;
}

function generateReadHeader() {
    let readHeader = document.createElement('tr');

    let title = document.createElement('th');
    title.setAttribute('id', 'title');
    title.innerText = 'Title';
    readHeader.appendChild(title);

    let author = document.createElement('th');
    author.setAttribute('id', 'author');
    author.innerText = 'Author';
    readHeader.appendChild(author);

    let dateRead = document.createElement('th');
    dateRead.setAttribute('id', 'dateRead');
    dateRead.innerText = 'Date Read';
    readHeader.appendChild(dateRead);

    let score = document.createElement('th');
    score.setAttribute('id', 'score');
    score.innerText = 'Score';
    readHeader.appendChild(score);

    let type = document.createElement('th');
    type.setAttribute('id', 'type');
    type.innerText = 'Type';
    readHeader.appendChild(type);

    return readHeader;
}

function generateBooksHeader() {
    //queue, title, author, book type, read status, date read, score, purchased
    let booksHeader = document.createElement('tr');

    let queue = document.createElement('th');
    queue.setAttribute('id', 'queue');
    queue.innerText = 'Queue';
    booksHeader.appendChild(queue);

    let title = document.createElement('th');
    title.setAttribute('id', 'title');
    title.innerText = 'Title';
    booksHeader.appendChild(title);

    let author = document.createElement('th');
    author.setAttribute('id', 'author');
    author.innerText = 'Author';
    booksHeader.appendChild(author);

    let dateRead = document.createElement('th');
    dateRead.setAttribute('id', 'dateRead');
    dateRead.innerText = 'Date Read';
    booksHeader.appendChild(dateRead);

    let score = document.createElement('th');
    score.setAttribute('id', 'score');
    score.innerText = 'Score';
    booksHeader.appendChild(score);

    let type = document.createElement('th');
    type.setAttribute('id', 'type');
    type.innerText = 'Type';
    booksHeader.appendChild(type);
    
    return booksHeader;
}

queueButtonSelector.addEventListener('click', () => {
    bodyTableSelector.innerHTML = '';
    bodyTableSelector.appendChild(generateQueueHeader());
})

booksButtonSelector.addEventListener('click', () => {
    bodyTableSelector.innerHTML = '';
    bodyTableSelector.appendChild(generateBooksHeader());
})

authorsButtonSelector.addEventListener('click', () => {
    bodyTableSelector.innerHTML = '';
    bodyTableSelector.appendChild(generateAuthorsHeader());
})

readButtonSelector.addEventListener('click', () => {
    bodyTableSelector.innerHTML = '';
    bodyTableSelector.appendChild(generateReadHeader());
})



