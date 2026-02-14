const bookContainer = document.querySelector(".book-container");
const modal = document.querySelector("#modal");
const addBookBtn = document.querySelector(".addBook");
//modal elements
const addBtn = document.querySelector("#addBtn");
const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#title");
const descInput = document.querySelector("#desc");
const pageNumberInput = document.querySelector("#pages");
const ratingInput = document.querySelector("#rating");
const colorInput = document.querySelector("#color");
const form = document.querySelector("#form");
const closeModelBtn = document.querySelector("#closeBtn");

let myLibrary = [];

function Book(author, title, description, rating, pageNumber, color) {
  this.id = crypto.randomUUID();
  this.author = author;
  this.title = title;
  this.description = description;
  this.rating = rating;
  this.color = color;
  this.pageNumber = pageNumber;
  this.read = false;

  this.updateReadStatus = function () {
    this.read = this.read ? false : true;
    return;
  };
}

function addBookToLibrary(
  author,
  title,
  description,
  pageNumber,
  rating,
  color,
) {
  myLibrary.unshift(
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
  "AntiqueWhite",
);
const b2 = addBookToLibrary(
  "Harper Lee",
  "To Kill a Mockingbird",
  "A story of racial injustice and childhood innocence in the American South, seen through the eyes of Scout Finch.",
  281,
  4.8,
  "AliceBlue",
);
const b3 = addBookToLibrary(
  "J.K. Rowling",
  "Harry Potter",
  "The first book in the magical Harry Potter series, following the young wizard's adventures at Hogwarts.",
  309,
  3,
  "Chocolate",
);
const b4 = addBookToLibrary(
  "F. Scott Fitzgerald",
  "The Great Gatsby",
  "A tragic tale of wealth, love, and the American Dream in 1920s New York.",
  180,
  4.4,
  "Crimson",
);
const b5 = addBookToLibrary(
  "Jane Austen",
  "Pride and Prejudice",
  "A classic romance exploring societal expectations, family, and love in 19th-century England.",
  279,
  4.6,
  "DarkCyan",
);
const b6 = addBookToLibrary(
  "Markus Zusak",
  "The Book Thief",
  "Set in Nazi Germany, a young girl finds solace in stealing books while her family hides a Jewish man.",
  552,
  4.7,
  "DarkRed",
);
const b7 = addBookToLibrary(
  "Leo Tolstoy",
  "War and Peace",
  "An epic novel covering French invasion of Russia, weaving together personal lives and historical events.",
  1225,
  4.5,
  "Crimson",
);
const b8 = addBookToLibrary(
  "Gabriel García Márquez",
  "One Hundred Years of Solitude",
  "A multi-generational story of the Buendía family in the magical town of Macondo, blending reality and fantasy.",
  417,
  2,
  "DarkSlateGray",
);
const b9 = addBookToLibrary(
  "Herman Melville",
  "Moby-Dick",
  "The obsessive quest of Captain Ahab to hunt the white whale, exploring human nature and destiny.",
  635,
  4.3,
  "LightSkyBlue",
);
const b10 = addBookToLibrary(
  "Chimamanda Ngozi Adichie",
  "Half of a Yellow Sun",
  "Set during the Nigerian Civil War, it follows the lives, love, and struggles of a group of characters.",
  448,
  4.5,
  "MediumSlateBlue",
);

function refreshUI() {
  bookContainer.replaceChildren();
  for (let book of myLibrary) {
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
    stars.style.color = "#cb9c11ff";
    img.style.color = book.color;
    bookDescription.textContent = book.description;
    readButton.textContent = "Unread";
    delButton.textContent = "Delete";
    bookId.textContent = book.id;

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
    img.classList.add("mdi");
    img.classList.add("mdi-book-open-blank-variant");
    bookDescription.classList.add("bookDescription");
    buttonsContainer.classList.add("btns");
    bookId.classList.add("none");
    bookId.classList.add("id");
    readButton.classList.add("readButton");
    delButton.classList.add("delButton");

    readButton.style.backgroundColor = book.read
      ? "rgba(23, 210, 56, 0.71)"
      : "rgb(148, 147, 147)";
    bookCard.style.backgroundColor = book.read
      ? "rgba(23, 210, 57, 0.215)"
      : "white";

    let readBtns = document.querySelectorAll(".readButton");
    readBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        if (
          book.id ===
          e.target.nextElementSibling.querySelector(".id").textContent
        ) {
          if (!book.read) {
            book.read = true;
            refreshUI();
          } else {
            book.read = false;
            refreshUI();
          }
        }
      }),
    );

    let delBtns = document.querySelectorAll(".delButton");
    delBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        for (let b of myLibrary) {
          if (b.id === e.target.querySelector(".id").textContent) {
            myLibrary = myLibrary.filter((bk) => bk !== b);
            refreshUI();
          }
        }
      }),
    );
  }
}

refreshUI();

addBookBtn.addEventListener("click", () => {
  modal.showModal();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

addBtn.addEventListener("click", (e) => {
  addBookToLibrary(
    authorInput.value,
    titleInput.value,
    descInput.value,
    pageNumberInput.value,
    ratingInput.value,
    colorInput.value,
    modal.close(),
  );

  refreshUI();
});

closeModelBtn.addEventListener("click", () => {
  modal.close();
});
