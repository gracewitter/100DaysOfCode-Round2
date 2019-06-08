let myLibrary = [
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    pages: 295,
    readStatus: false
  }
];

function Book() {

}

function addBookToLibrary(event){
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read");
  let readStatus;

  if (read.checked){
    readStatus = true;
  } else {
    readStatus = false;
  }

  let book = new Book(title, author, pages, readStatus);

  myLibrary.push(book);

  render();
}

function render() {
  const libraryShelf = document.querySelector("tbody");

  if (libraryShelf.children.length > 0) {
    while (libraryShelf.children.length !== 0) {
      libraryShelf.removeChild(libraryShelf.lastChild);
    }
  }

  for (let i = 0; i < myLibrary.length; i++){
    const tableRow = document.createElement("tr");
    const bookNo = document.createElement("td");
    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");
    const readStatus = document.createElement("td");
    const deleteElement = document.createElement("td");
    const deleteButton = document.createElement("td");

    libraryShelf.appendChild(tableRow);
    tableRow.setAttribute("data-index", `${i}`);
    tableRow.appendChild(bookNo);
    tableRow.appendChild(title);
    tableRow.appendChild(author);
    tableRow.appendChild(pages);
    tableRow.appendChild(readStatus);
    tableRow.appendChild(deleteElement);
    deleteElement.appendChild(deleteButton);

    bookNo.innerHTML = `${i + 1}`;
    title.innerHTML = `${myLibrary[i].title}`;
    author.innerHTML = `${myLibrary[i].author}`;
    pages.innerHTML = `${myLibrary[i].pages}`;
  }

}
