const myLibrary = [];
var container = document.getElementById('container');
let NewBook = document.getElementById("AddBook")
let formcontainer = document.getElementById("formcontainer")
let transparent = document.getElementById("transparent")
let form = document.getElementById("form")

form.addEventListener('submit', function (event) {
    event.preventDefault()

    var title = document.getElementById("Title").value
    var author = document.getElementById("Author").value
    console.log(author)
    var pages = document.getElementById("Pages").value
    var read = document.getElementById("Read")
    let readvalue
    if (read.checked) {
        readvalue = true
    } else {
        readvalue = false
    }

    transparent.style.display = "none"
    formcontainer.style.display = "none"

    



    addBookToLibrary(title, author, pages, readvalue)
    var bookElement = createBookElement(myLibrary[myLibrary.length - 1]);
    console.log(read.value)
    container.appendChild(bookElement);
    form.reset()
})




transparent.addEventListener("click", () => {
    if (formcontainer.style.display === "none") {
        formcontainer.style.display = "block"
        transparent.style.display = "block"
    } else {
        formcontainer.style.display = "none"
        transparent.style.display = "none"
        form.reset()
    }
})

NewBook.addEventListener("click", () => {
    if (formcontainer.style.display === "none") {
        formcontainer.style.display = "block"
        transparent.style.display = "block"
    } else {
        formcontainer.style.display = "none"
        transparent.style.display = "none"
    }
})



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("Book 1", "Author 1", 100, true);

function createBookElement(book) {
    var newDiv = document.createElement('div');
    newDiv.classList.add("book");

    var newTitle = document.createElement('div');
    newTitle.classList.add("booktitle");
    newTitle.textContent = book.title;

    var newAuthor = document.createElement("div");
    newAuthor.classList.add("bookauthor");
    newAuthor.textContent = "By "+ book.author;


    var newBookPages = document.createElement("div");
    newBookPages.classList.add("bookpages");
    newBookPages.textContent = book.pages + " Pages";

    var newRemoveBook = document.createElement("div")
    newRemoveBook.classList.add("RemoveBook")

    var newRemoveBookButton = document.createElement("button")
    newRemoveBookButton.classList.add("bookremuveButton")
    newRemoveBookButton.textContent = "Remove"

    newRemoveBookButton.addEventListener("click", () => {
        newDiv.remove();
    })


    var newRead = document.createElement("div");
    newRead.classList.add("bookread");

    var bookbutton = document.createElement("button");
    bookbutton.classList.add("BookButton");
    bookbutton.textContent = book.read
    if (book.read === false) {
        bookbutton.textContent = "Not read"
        bookbutton.style.backgroundColor = "red"
    } else if (book.read === true) {
        bookbutton.style.backgroundColor = "RGB(173, 255, 47)"
        bookbutton.textContent = "Read"
    }

    bookbutton.addEventListener("click", () => {
        book.read = !book.read;
        bookbutton.textContent = book.read
        if (book.read === false) {
            bookbutton.textContent = "Not read"
            bookbutton.style.backgroundColor = "red"
        } else if (book.read === true) {
            bookbutton.style.backgroundColor = "RGB(173, 255, 47)"
            bookbutton.textContent = "Read"
        }
    });
    newRemoveBook.appendChild(newRemoveBookButton)
    newRead.appendChild(bookbutton);
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newAuthor);
    newDiv.appendChild(newBookPages);
    newDiv.appendChild(newRead);
    newDiv.appendChild(newRemoveBook)

    return newDiv;
}

function showbook() {
    for (var i in myLibrary) {
        var bookElement = createBookElement(myLibrary[i]);
        container.appendChild(bookElement);

    }
}


showbook();

console.log(myLibrary)