const bookContainer = document.querySelector(".book-container");

let myLibrary = [];

function Book(author, title, description, rating, pageNumber, color) {
  this.id = crypto.randomUUID();
  this.author = author;
  this.title = title;
  this.description = description;
  this.rating = rating;
  this.color = color;
  this.pageNumber = pageNumber;
}

function addBookToLibrary(
  author,
  title,
  description,
  pageNumber,
  rating,
  color,
) {
  myLibrary.push(
    new Book(author, title, description, rating, pageNumber, color),
  );
  return;
}

const b1 = addBookToLibrary(
  "George Orwell",
  "1984",
  "A dystopian novel about totalitarianism and constant surveillance, exploring themes of truth and freedom.",
  328,
  4.7,
  "red",
);
const b2 = addBookToLibrary(
  "Harper Lee",
  "To Kill a Mockingbird",
  "A story of racial injustice and childhood innocence in the American South, seen through the eyes of Scout Finch.",
  281,
  4.8,
  "blue",
);
const b3 = addBookToLibrary(
  "J.K. Rowling",
  "Harry Potter and the Sorcerer's Stone",
  "The first book in the magical Harry Potter series, following the young wizard's adventures at Hogwarts.",
  309,
  3,
  "purple",
);
const b4 = addBookToLibrary(
  "F. Scott Fitzgerald",
  "The Great Gatsby",
  "A tragic tale of wealth, love, and the American Dream in 1920s New York.",
  180,
  4.4,
  "green",
);
const b5 = addBookToLibrary(
  "Jane Austen",
  "Pride and Prejudice",
  "A classic romance exploring societal expectations, family, and love in 19th-century England.",
  279,
  4.6,
  "pink",
);
const b6 = addBookToLibrary(
  "Markus Zusak",
  "The Book Thief",
  "Set in Nazi Germany, a young girl finds solace in stealing books while her family hides a Jewish man.",
  552,
  4.7,
  "orange",
);
const b7 = addBookToLibrary(
  "Leo Tolstoy",
  "War and Peace",
  "An epic novel covering French invasion of Russia, weaving together personal lives and historical events.",
  1225,
  4.5,
  "brown",
);
const b8 = addBookToLibrary(
  "Gabriel García Márquez",
  "One Hundred Years of Solitude",
  "A multi-generational story of the Buendía family in the magical town of Macondo, blending reality and fantasy.",
  417,
  2,
  "yellow",
);
const b9 = addBookToLibrary(
  "Herman Melville",
  "Moby-Dick",
  "The obsessive quest of Captain Ahab to hunt the white whale, exploring human nature and destiny.",
  635,
  4.3,
  "grey",
);
const b10 = addBookToLibrary(
  "Chimamanda Ngozi Adichie",
  "Half of a Yellow Sun",
  "Set during the Nigerian Civil War, it follows the lives, love, and struggles of a group of characters.",
  448,
  4.5,
  "teal",
);

function refreshUI() {
  bookContainer.textContent = "";
  for (book of myLibrary) {
    let bookCard = document.createElement("div");

    let bookTxt = document.createElement("div");
    let bookImg = document.createElement("div");
    let bookDescription = document.createElement("p");
    let bookTitle = document.createElement("h3");
    let authorAndPages = document.createElement("span");
    let stars = document.createElement("span");
    let img = document.createElement("span");

    let readButton = document.createElement("button");
    let delButton = document.createElement("button");

    let buttonsContainer = document.createElement("div");
    let bookId = document.createElement("span");

    bookTitle.textContent = book.title;
    authorAndPages.textContent = `${book.author} | ${book.pageNumber} pages`;
    stars.textContent =
      "★".repeat(Math.floor(book.rating)) +
      "☆".repeat(5 - Math.floor(book.rating));
    stars.style.color = "#f5c842";
    img.classList.add("mdi");
    img.classList.add("mdi-book-open-blank-variant");
    img.style.color = book.color;

    bookDescription.textContent = book.description;
    bookDescription.classList.add("bookDescription");

    readButton.classList.add("readButton");
    delButton.classList.add("delButton");

    readButton.textContent = "Unread";
    delButton.textContent = "Delete";

    bookId.textContent = book.id;
    bookId.classList.add("none");
    bookId.classList.add("id");

    buttonsContainer.classList.add("btns");
    buttonsContainer.appendChild(readButton);
    buttonsContainer.appendChild(delButton);

    bookCard.appendChild(bookTxt);
    bookCard.appendChild(bookImg);
    bookCard.appendChild(bookDescription);
    delButton.appendChild(bookId);

    bookTxt.appendChild(bookTitle);
    bookTxt.appendChild(authorAndPages);
    bookTxt.appendChild(stars);
    bookTxt.appendChild(buttonsContainer);

    bookImg.appendChild(img);
    bookContainer.appendChild(bookCard);

    bookCard.classList.add("bookCard");
    bookTxt.classList.add("bookTxt");
    bookImg.classList.add("bookImg");
    stars.classList.add("stars");
    authorAndPages.classList.add("author");
  }
}

refreshUI();
let btns = document.querySelectorAll(".readButton");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.textContent === "Unread") {
      e.target.classList.add("read");
      e.target.textContent = "Read";
      e.target.closest(".bookCard").classList.add("read2");
    } else {
      e.target.classList.remove("read");
      e.target.textContent = "Unread";
      e.target.closest(".bookCard").classList.remove("read2");
    }
  });
});

let btnsDel = document.querySelectorAll(".delButton");
btnsDel.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let id = document.querySelector(".id");
    for (book of myLibrary) {
      if (book.id === id.textContent) {
        myLibrary = myLibrary.filter((book) => book.id !== id.textContent);
        e.target.closest(".bookCard").remove();
        console.log(myLibrary);
      }
    }
  });
});
