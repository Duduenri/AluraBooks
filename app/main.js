let books = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getSearchBooksFromAPI()


async function getSearchBooksFromAPI() {
    const res = await fetch(endpointDaAPI)
    books = await res.json()
    let discountBooks = applyDiscount(books)
    displayBooksOnScreen(discountBooks)
}

