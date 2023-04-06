function applyDiscount(livros) {
    const discount = 0.3
    booksWithDiscount = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * discount)}
    })

    return booksWithDiscount

}