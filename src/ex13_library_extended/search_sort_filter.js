let searchInputField = document.getElementById("input-field");

searchInputField.oninput = function () {
  dataBooksArr.forEach(searchBookByTitle);
}

function searchBookByTitle(item, i) {
  let searchedTitle = document.getElementById("input-field").value.toLowerCase(),
    bookTitle = item.title.toLowerCase(),
    bookId = "book-number-" + (i + 1),
    book = document.getElementById(bookId);

  if (bookTitle.indexOf(searchedTitle) > -1) {
    book.style.display = "";
  }
  else {
    book.style.display = "none";
  }
  event.preventDefault();
}

let headerFilters = document.getElementById("filters");

headerFilters.onclick = function (event) {
  let target = event.target;

  if (target.tagName !== "LI") {
    return;
  }

  if (target.innerHTML.includes("recent")) {
    sortBooks("recent");
  }
  else if (target.innerHTML.includes("popular")) {
    sortBooks("popular");
  }
  else if (target.innerHTML.includes("All")) {
    booksContainer.innerHTML = "";
    dataBooksArr.forEach(renderBook);
  }
  else if (target.innerHTML.includes("Free")) {
    filterBooks("free");
  }
}

let sideBarFilters = document.getElementById("third-block");

sideBarFilters.onclick = function (event) {
  let target = event.target;

  if (target.tagName !== "DIV") {
    return;
  }

  if (target.innerHTML.includes("Must")) {
    filterBooks("must_read");
  }
  else if (target.innerHTML.includes("Best")) {
    filterBooks("best");
  }
  else if (target.innerHTML.includes("Classic")) {
    filterBooks("classic");
  }
  else if (target.innerHTML.includes("Non")) {
    filterBooks("non_fiction");
  }
}

function filterBooks(param) {
  let arr = formVisibleBooksArr(),
    book;

  if (param === "free") {
    arr.forEach(function filterByCost(item) {
      book = defineBook(item);

      if (item.cost === 0) {
        book.style.display = "block";
      }
      else { 
        book.style.display = "none";
      }
    })
  }
  else if (param === "must_read" || "best" || "classic" || "non_fiction") {
    arr.forEach(function filterByCategory(item) {
      book = defineBook(item);

      if (item.categories.includes(param)) {
        book.style.display = "block";
      }
      else { 
        book.style.display = "none";
      }
    })
  }
}

function defineBook(item) {
  let bookId = "book-number-" + item.id,
    book = document.getElementById(bookId);
  return book;
}

function sortBooks(param) {
  let visibleBooksArr = formVisibleBooksArr();

  if (param === "recent") {

    visibleBooksArr.sort(function (a, b) {
      if (new Date(a.updatedAt) > new Date(b.updatedAt)) {
        return 1;
      }
      if (new Date(a.updatedAt) < new Date(b.updatedAt)) {
        return -1;
      }
      return 0;
    });
  }

  if (param === "popular") {

    visibleBooksArr.sort(function (a, b) {
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    });
  }

  booksContainer.innerHTML = "";
  visibleBooksArr.forEach(renderBook);
}

function formVisibleBooksArr() {
  let books = document.querySelectorAll("[id^=\"book-number-\"]"),
    visibleBooksArr = [],
    index;

  books.forEach(function selectVisibleBooks(item) {
    if (item.style.display !== "none") {
      index = item.children[3].attributes[1].nodeValue;
      visibleBooksArr.push(dataBooksArr[index - 1]);
    }
  })
  return visibleBooksArr;
}