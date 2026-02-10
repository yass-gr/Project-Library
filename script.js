




const myLibrary = []

function Book(author, title, description, rating, pageNumber color){
        this.id = crypto.randomUUID()
        this.author = author
        this.title = title
        this.description = description
        this.rating = rating
        this.color = color
}

function addBookToLibrary(author, title, description, pageNumber, rating, color){
    myLibrary.push(new Book(author, title, description, rating, pageNumber, color))
    return
}

