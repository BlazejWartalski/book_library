const table = document.querySelector('.table');
let myLibrary = [];

if(localStorage.getItem('bookValues') == null){
    myLibrary = [];
}else{
    myLibrary = JSON.parse(localStorage.getItem('bookValues'));
    myLibrary = myLibrary.filter(element => {
        return element !== null;
    })
    // console.log(myLibrary);
}

// let myLibrary = [
//     {
//         title: "got",
//         author: "scoundrel",
//         year: 2010,
//         pages: 300,
//         progress: 'finished',
//     },
//     {
//         title: "book2",
//         author: "scoundrel2",
//         year: 2020,
//         pages: 400,
//         progress: 'reading',
//     }
// ];

class Book{
    constructor(title, author, year, pages, progress) {
        this.title = title
        this.author = author
        this.pages = pages
        this.year = year
        this.progress = progress
        this.id = myLibrary.length += 1;
        // console.log(myLibrary.length += 1);
    }
}

function addBookToLibrary(title, author, year, pages, progress) {
    const book = new Book(title, author, year, pages, progress);
    myLibrary.push(book);
    localStorage.setItem('bookValues', JSON.stringify(myLibrary));
    createTable(myLibrary);
}

// let display = document.querySelector('.bookname');




// function displayRefresh(myLibrary) {
//     for (let i = 0; i < myLibrary.length; i += 1) {

//     }
function createTable(myLibrary) {
    myLibrary.forEach((item) => {
        const tr = document.createElement('tr');
        const tdbtn = document.createElement('td');
        const removebutton = document.createElement('button');
        tdbtn.appendChild(removebutton);
        removebutton.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(item),1);
            localStorage.setItem('bookValues', JSON.stringify(myLibrary));
            window.location.reload();
        })/home/blazej/theOdinProject/js2/object_constructors/style.css
        Object.entries(item).forEach(val => {
            if (val[0] === "id") {
            } else {
            const td = document.createElement('td');
            const name = document.createTextNode(val[1])
            td.appendChild(name);
            tr.appendChild(td);
            tr.appendChild(tdbtn);
            
            removebutton.innerHTML = "<span>Deleteowwo</span>";
            removebutton.classList.add('btn');
        }
    table.appendChild(tr)});
})};

document.querySelector('form.new-book-form').addEventListener('submit', function(e) {
    // console.log(title, author, pages, year, progress);

    e.preventDefault;
    title = document.querySelector('#title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    year = document.getElementById('year').value;
    progress = document.getElementById('progress').value;
    // console.log(title, author, pages, year, progress);
    addBookToLibrary(title, author, pages, year, progress)
});

// console.log(myLibrary);
createTable(myLibrary);
