document.body.style.overflow = "hidden";

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

var booksContainer = document.getElementById("books-container");

function renderBooks(item, i) {
  booksContainer.innerHTML += "<div class=\"book\">" +
    "<img src=\"" + item.image_url + "\" alt=\"Image of Book\">" +
    "<div class=\"book-title\">" + item.title + "</div>" +
    "<div class=\"book-author\"> by " + item.author.firstName + " " + item.author.lastName + "</div>" +
    "<div class=\"star-rating-container\"></div></div>";

  var starRate = item.rating;
  var starRateContainer = booksContainer.getElementsByClassName("star-rating-container")[i];

  var wholeFilledStars = Math.round(Math.floor(starRate));
  var emptyStars = 5 - starRate;
  var wholeEmptyStars = Math.round(Math.floor(emptyStars));
  var halfEmptyStars = emptyStars - wholeEmptyStars;
  var k;

  /***********   Everage User's rating  ************/

  //whole stars
  for (k = 0; k < wholeFilledStars; k++) {
    starRateContainer.innerHTML += " <div class=\"star star-filled\"></div>" +
      "<div class=\"star mirror star-filled\"></div><span> &nbsp;</span>";
  }
  //half empty stars
  if ((halfEmptyStars > 0) & (halfEmptyStars < 1)) {
    starRateContainer.innerHTML += " <div class=\"star star-filled\"></div>" +
      "<div class=\"star mirror star-empty\"></div><span> &nbsp;</span>";
  }
  //whole empty stars
  for (k = 0; k < wholeEmptyStars; k++) {
    starRateContainer.innerHTML += " <div class=\"star star-empty\"></div>" +
      "<div class=\"star mirror star-empty\"></div><span> &nbsp;</span>";
  }
};

dataBooks.forEach(renderBooks);

/***********   User rating  ************/

var starRateContainer = document.querySelector(".star-rating-container");
var stars = document.querySelectorAll(".star");
var selectedStarIndex;
var filledStarIndex = 0;
var startIndex;

starRateContainer.onclick = function (event) {
  var target = event.target;
  
  if (!target.classList.contains("star")) return;  

  target.classList.add("selected");
  findIndexOfSelectedStar(target)
  return;
}

function findIndexOfSelectedStar(target) {

  for (var k = 0; k < stars.length; k++) {
    if (stars[k].classList.contains("selected")) {
      selectedStarIndex = k; // saving selected star index
      target.classList.remove("selected"); 

      // if clicked on the same star     
      if (filledStarIndex === selectedStarIndex) {
        selectedStarIndex = 0;
        clearStars(selectedStarIndex, filledStarIndex, stars); // reseting rating
        filledStarIndex = 0;       
      }
      // if clicked on one of the following stars 
      else if (filledStarIndex < selectedStarIndex) {
        fillStars(filledStarIndex, selectedStarIndex, stars);
        filledStarIndex = selectedStarIndex;    
      }
      // if clicked on one of the previous stars 
      else if (filledStarIndex > selectedStarIndex) {
        clearStars(selectedStarIndex + 1, filledStarIndex, stars);
        filledStarIndex = selectedStarIndex;        
      }
    }
  }
  return filledStarIndex;
}

function fillStars(start, finish, arr) {
  for (var i = start; i <= finish; i++) {
    arr[i].classList.add("star-filled");
    arr[i].classList.remove("star-empty");
  }
}

function clearStars(start, finish, arr) {
  for (var i = start; i <= finish; i++) {
    arr[i].classList.add("star-empty");
    arr[i].classList.remove("star-filled");
  }
}


