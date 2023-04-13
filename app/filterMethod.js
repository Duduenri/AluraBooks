const buttonfilterbooksFront = document.getElementById('buttonfilterbooksFront')
buttonfilterbooksFront.addEventListener('click', filterBooks)

function filterBooks() {
    let filteredBooks = books.filter(book => book.category == 'front-end')
    console.table.apply(filteredBooks)

}