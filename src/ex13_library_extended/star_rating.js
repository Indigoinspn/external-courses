booksContainer.onclick = function (event) {
    let target = event.target,
      stars,
      selectedStarIndex,
      bookIndex;
  
    if (!target.classList.contains("star")) return;
  
    bookId = `book-number-${target.parentNode.attributes[1].value}`;
    starSelector = `#${bookId} .star`;
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
    let bookRatingValue;
  
    if (selectedStarIndex === "") {
      bookRatingValue = 0;
    }
    else if (selectedStarIndex === 0) {
      bookRatingValue = 0.5;
    }
    else {
      bookRatingValue = (selectedStarIndex + 1) / 2;
    }
    dataBooksArr[bookIndex].rating = bookRatingValue;  
  }
  
  booksContainer.onmouseover = function (event) { 
    let target = event.target,
      stars;
  
    if (!target.classList.contains("star")) return;
  
    bookId = `book-number-${target.parentNode.attributes[1].value}`;
    starSelector = `#${bookId} .star`;
    stars = Array.from(document.querySelectorAll(starSelector)); 
  
    replaceClass(stars, 'star-filled', 'star-empty')
    
    target.classList.add('star-filled'); 
    target.classList.remove('star-empty');
    
    fillAllPreviousStars(stars)    
  }
  
  booksContainer.onmouseout = function () { 
    let target = event.target,
      stars;
  
    if (!target.classList.contains("star")) return;
  
    bookId = `book-number-${target.parentNode.attributes[1].value}`;
    starSelector = `#${bookId} .star`;
    stars = Array.from(document.querySelectorAll(starSelector));
    
    replaceClass(stars, 'star-empty', 'star-filled')  
    clearAllFollowingStars(stars); 
  }
  
  function removeClass(arr, param) {  
    for (let i = 0; i < arr.length; i++) {     
      arr[i].classList.remove(param); 
    }  
  }
  
  function replaceClass(arr, param1, param2) { 
    for (let i = 0; i < arr.length; i++) {    
      arr[i].classList.remove(param1); 
      arr[i].classList.add(param2);
    }  
  }
  
  function fillAllPreviousStars(arr) {
  
    for (let i = 0; i < arr.length; i++) { 
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
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].classList.contains('selected')) {      
        break;
      } 
      else {
        arr[i].classList.remove('star-filled');
        arr[i].classList.add('star-empty');
      }
    }
  }