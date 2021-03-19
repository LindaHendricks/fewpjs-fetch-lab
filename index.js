function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json()) 
  .then(data => { // data are the books --- Information I get back from the API
    // console.log(renderBooks()) 
    return renderBooks(data) // This is the return which will put it on the DOM
  })

  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// when my content is loaded that fechBooks is invoke?

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});