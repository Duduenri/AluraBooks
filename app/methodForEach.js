const elementoParaInserirBooks = document.getElementById('books')

function displayBooksOnScreen(listaDeBooks) {
    listaDeBooks.forEach(book => {
        elementoParaInserirBooks.innerHTML += `
        <div class="book">
        <img class="book__imagens" src="${book.imagem}"
          alt="${book.alt}" />
        <h2 class="book__titulo">
          ${book.titulo}
        </h2>
        <p class="book__descricao">${book.autor}</p>
        <p class="book__preco" id="preco">R$${book.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${book.categoria}</span>
        </div>
      </div>
        `
    })
}