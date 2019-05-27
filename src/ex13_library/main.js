var dataBooks = [/*
  */{
    "id": "1",
    "title": "Jewels of Nizam",
    "author": { "firstName": "Geeta", "lastName": "Devi" },
    "rating": 0,
    "cost": 100,
    "categories": ["must_read", "best", "non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1528046197707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/1.jpg"
  },/*    
  */{
    "id": 2,
    "title": "Cakes & Bakes",
    "author": { "firstName": "Sanjeev", "lastName": "Kapoor" },
    "rating": 0.5,
    "cost": 200,
    "categories": ["best", "classic"],
    "createdAt": 1506943763424,
    "updatedAt": 1525367797707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/2.jpg"
  },/*    
  */{
    "id": 3,
    "title": "Jamie\"s Kitchen",
    "author": { "firstName": "Jamie", "lastName": "Oliver" },
    "rating": 1,
    "cost": 300,
    "categories": ["non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1530638197707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/3.jpg"
  },/*    
  */{
    "id": 4,
    "title": "Inexpensive Family Meals",
    "author": { "firstName": "Simon", "lastName": "Holst" },
    "rating": 1.5,
    "cost": 50,
    "categories": [],
    "createdAt": 1506943763424,
    "updatedAt": 1520097397707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/4.jpg"
  },/*    
  */{
    "id": 5,
    "title": "Paleo Slow Cooking",
    "author": { "firstName": "Chrissy", "lastName": "Gawer" },
    "rating": 2,
    "cost": 1000,
    "categories": ["classic"],
    "createdAt": 1506943763424,
    "updatedAt": 1520097397707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/5.jpg"
  },/*    
  */{
    "id": 6,
    "title": "Cook Like an Italian",
    "author": { "firstName": "Toble", "lastName": "Puttock" },
    "rating": 2.5,
    "cost": 12,
    "categories": ["non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1520097397707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/6.jpg"
  },/*    
  */{
    "id": 7,
    "title": "Suneeta Vaswani",
    "author": { "firstName": "Geeta", "lastName": "Devi" },
    "rating": 3,
    "cost": 504,
    "categories": ["must_read", "best", "non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1517678197707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/7.jpg"
  },/*    
  */{
    "id": 8,
    "title": "Jamie Does",
    "author": { "firstName": "Jamie", "lastName": "Oliver" },
    "rating": 3.5,
    "cost": 100,
    "categories": [],
    "createdAt": 1506943763424,
    "updatedAt": 1538586997707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/8.jpg"
  },/*    
  */{
    "id": 9,
    "title": "Jamie\"s Italy",
    "author": { "firstName": "Jamie", "lastName": "Oliver" },
    "rating": 4,
    "cost": 100,
    "categories": ["must_read", "best"],
    "createdAt": 1506943763424,
    "updatedAt": 1528046197707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/9.jpg"
  },/*    
  */{
    "id": 10,
    "title": "Vegetables Cookbook",
    "author": { "firstName": "Matthew", "lastName": "Biggs" },
    "rating": 4.5,
    "cost": 100,
    "categories": ["must_read", "non_fiction"],
    "createdAt": 1506943763424,
    "updatedAt": 1522775797707,
    "image_url": "http://rsu-library-api.herokuapp.com/static/images/10.jpg"
  }
];

function roundNum(num) {
  return Math.round(Math.floor(num));
}

var booksContainer = document.getElementById("books-container");

function renderBook(item, i) {
  var starRate = item.rating,
    wholeFilledStars = roundNum(starRate),
    emptyStars = 5 - starRate,
    wholeEmptyStars = roundNum(emptyStars),
    halfEmptyStars = emptyStars - wholeEmptyStars,
    starRateHTML = "",
    starHTML;

  starHTML = " <div class=\"star star-filled\"></div>" +
    "<div class=\"star mirror star-filled\"></div>";
  starRateHTML += starHTML.repeat(wholeFilledStars);

  if ((halfEmptyStars > 0) & (halfEmptyStars < 1)) {
    starRateHTML += " <div class=\"star star-filled\"></div>" +
      "<div class=\"star mirror star-empty\"></div>";
  }

  starHTML = " <div class=\"star star-empty\"></div>" +
    "<div class=\"star mirror star-empty\"></div>";
  starRateHTML += starHTML.repeat(wholeEmptyStars)

  booksContainer.innerHTML += "<div id=\"book-number-" + item.id +
    "\" class=\"book\">" + "<img src=\"" + item.image_url +
    "\" alt=\"Image of Book\">" + "<div class=\"book-title\">" +
    item.title + "</div>" + "<div class=\"book-author\"> by " +
    item.author.firstName + " " + item.author.lastName +
    "</div>" + "<div class=\"star-rating-container\" data-book-id = \"" +
    item.id + "\" >" + starRateHTML + "</div></div>";
}

dataBooks.forEach(renderBook);


booksContainer.onclick = function (event) {  
  var target = event.target,
    stars,
    selectedStarIndex,
    bookIndex;

  if (!target.classList.contains("star")) return;

  bookId = "book-number-" + target.parentNode.attributes[1].value;
  starSelector = "#" + bookId + " .star";
  stars = Array.from(document.querySelectorAll(starSelector));
  bookIndex = target.parentNode.attributes[1].value - 1;

  if (target.classList.contains('selected')) {
    removeClass(stars, 'selected');
    replaceClass(stars, 'star-filled', 'star-empty')
    selectedStarIndex = "";
  }
  else {
    removeClass(stars, 'selected');        
    target.classList.add('star-filled', 'selected'); 
    target.classList.remove('star-empty');    
    selectedStarIndex = stars.findIndex(selectedStar);
  }
  setBookRating(selectedStarIndex, bookIndex)
}

function selectedStar(star) {
  return star.classList.contains("selected");
}

function setBookRating(selectedStarIndex, bookIndex) {
  var bookRatingValue;
  
  if (selectedStarIndex === "") {
    bookRatingValue = 0;
  }
  else if (selectedStarIndex === 0) {
    bookRatingValue = 0.5;
  }
  else {
    bookRatingValue = (selectedStarIndex + 1) / 2;
  }
  dataBooks[bookIndex].rating = bookRatingValue;  
}

booksContainer.onmouseover = function (event) { 
  var target = event.target,
    stars;

  if (!target.classList.contains("star")) return;

  bookId = "book-number-" + target.parentNode.attributes[1].value;
  starSelector = "#" + bookId + " .star";
  stars = Array.from(document.querySelectorAll(starSelector));
  
  replaceClass(stars, 'star-filled', 'star-empty')  
  target.classList.add('star-filled'); 
  target.classList.remove('star-empty');  
  fillAllPreviousStars(stars);  
}

booksContainer.onmouseout = function () { 
  var target = event.target,
    stars;

  if (!target.classList.contains("star")) return;

  bookId = "book-number-" + target.parentNode.attributes[1].value;
  starSelector = "#" + bookId + " .star";
  stars = Array.from(document.querySelectorAll(starSelector));
  
  replaceClass(stars, 'star-empty', 'star-filled'); 
  clearAllFollowingStars(stars);   
}


function removeClass(arr, param) {  
  for (var i = 0; i < arr.length; i++) {    
    arr[i].classList.remove(param); 
  }  
}

function replaceClass(arr, param1, param2) { 
  for (var i = 0; i < arr.length; i++) {   
    arr[i].classList.remove(param1); 
    arr[i].classList.add(param2);
  }  
}

function fillAllPreviousStars(arr) {
  for (var i = 0; i < arr.length; i++) { 
    if (arr[i].classList.contains('star-filled')) {      
      break;
    }
    else {
      arr[i].classList.remove('star-empty');
      arr[i].classList.add('star-filled');
    }    
  }  
}

function clearAllFollowingStars(arr) { 
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i].classList.contains('selected')) {     
      break;
    } 
    else {
      arr[i].classList.remove('star-filled');
      arr[i].classList.add('star-empty');      
    }    
  }  
}