// Book class Represent a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UA class: Handle UI Tasks

class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Mne pary cryl dalo jnactva',
                author: 'Maxim Tank',
                isbn: '985-02-0613-6'
            },
            {
                title: 'Rak vysasz',
                author: 'Jakyb Kolas',
                isbn: '5-7880-0172-2'
            },
            {
                title: 'Tytajszyje',
                author: 'Janka Kypala',
                isbn: '985-02-0814-7'
            },
        ];
        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td> <a href="#" class="btn btn-danger btn-sm-delete"> X </a> </td>
    `;

        list.appendChild(row)
    }
    static clearFields() {
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';
    }

}


// Store class: Handle Storage

//Event: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks)


//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent action submit
    e.preventDefault()
    // Get Form Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Instatiate book
    const book = new Book(title, author, isbn);

    // Add Book to UI

    UI.addBookToList(book)

    // Clear fields

    UI.clearFields()

})

//Event: Remove a Book;