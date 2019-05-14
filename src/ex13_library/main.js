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
  booksContainer.innerHTML += "<div id=\"book-number-" + item.id + "\" class=\"book\">" +
    "<img src=\"" + item.image_url + "\" alt=\"Image of Book\">" +
    "<div class=\"book-title\">" + item.title + "</div>" +
    "<div class=\"book-author\"> by " + item.author.firstName + " " + item.author.lastName + "</div>" +
    "<div class=\"star-rating-container\"  data-book-id = \"" + item.id + "\" > </div></div>";

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

/***************************   User rating  *******************************/

var bookId,
    bookIndex,
    bookRatingValue,
    starSelector,
    stars, // NodeList
    selectedStarIndex,
    filledStarIndex;
    

function getBookRating (bookIndex) {
  if (dataBooks[bookIndex].rating === 0){
    filledStarIndex = 0;
  }
  else {
    filledStarIndex = dataBooks[bookIndex].rating * 2 -1; //filledStarIndex - define array index of selected star half
  }  
  return filledStarIndex;
}

function setBookRating (bookIndex, bookRatingValue) {
  dataBooks[bookIndex].rating = bookRatingValue;        
  return bookRatingValue;
}

/**************** Onclick event listener *****************/

booksContainer.onclick = function (event) {
  var target = event.target; 
  
  if (!target.classList.contains("star")) return; 
  
  bookIndex = target.parentNode.attributes[1].value - 1; // define selected book index   
  getBookRating (bookIndex); // get rating from dataBooks array and save to filledStarIndex    

  target.classList.add("selected"); // mark target star with the  "SELECTED" class

  bookId = "book-number-" + target.parentNode.attributes[1].value; 
  starSelector = "#" + bookId + " .star";
  stars = document.querySelectorAll(starSelector); // define target star array 

  
  findIndexOfSelectedStar(target,bookIndex);
}

/************ LOGIC: Fill or Clear star *************/

function findIndexOfSelectedStar(target,bookIndex) {

  for (var k = 0; k < stars.length; k++) {
    if (stars[k].classList.contains("selected")) {     
      selectedStarIndex = k;                  
      target.classList.remove("selected"); // remove target mark 
        
      // clicked on the same star  or if conflict: bookRating 0 and filledStarIndex = selectedStarIndex = 0. 
      //( 0 = index of fist star half = 0.5 bookRating) 

      if (filledStarIndex === selectedStarIndex) {

        if (filledStarIndex === 0) { 
          bookRatingValue = 0.5;
          fillStars(filledStarIndex, selectedStarIndex, stars);
        }
        else {
          selectedStarIndex = 0;
          bookRatingValue = 0;
          clearStars(selectedStarIndex, filledStarIndex, stars); 
        }               
      }
      //clicked on one of following stars   
      else if (filledStarIndex < selectedStarIndex) {  
        bookRatingValue = (selectedStarIndex + 1)/2;              
        fillStars(filledStarIndex, selectedStarIndex, stars); 
      }
      //clicked on one of the previous stars 
      else if (filledStarIndex > selectedStarIndex) {       
        bookRatingValue = (selectedStarIndex + 1)/2; 
        clearStars(selectedStarIndex + 1, filledStarIndex, stars); 
      }      
      
      setBookRating (bookIndex, bookRatingValue); // set rating to data array  equal  to selectedStarIndex
      getBookRating (bookIndex);

      //console.log ("filledStarIndex:  " + filledStarIndex );
      //console.log ("book rating:  ",dataBooks[bookIndex].rating);
      //console.log (dataBooks[bookIndex]);     
    }
  }
  return selectedStarIndex;
}

/************ FUNCTIONS:  Fill or Clear star  *************/

function fillStars(start, finish, arr) {  
  if (start === 0 & finish === 0) { // if bookRating 0 and initial filledStarIndex = selectedStarIndex = 0 (=index of fist star half)
    arr[0].classList.remove("star-empty");
    arr[0].classList.add("star-filled");
  }
  else {
    for (var i = start; i <= finish; i++) {   
      arr[i].classList.remove("star-empty");
      arr[i].classList.add("star-filled");    
    }
  }  
}

function clearStars(start, finish, arr) {
  for (var i = start; i <= finish; i++) {  
    arr[i].classList.remove("star-filled");
    arr[i].classList.add("star-empty");    
  }
}