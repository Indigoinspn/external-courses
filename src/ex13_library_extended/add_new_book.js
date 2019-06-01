let addBookButton = document.getElementById("add-button"),
    addBookForm = document.getElementById("form-container"), 
    closeFormButton = document.getElementById("butt-close-form");
    uploadBookButton = document.getElementById("upload");   

addBookButton.onclick = function(){
  addBookForm.style.display = "block";
}

closeFormButton.onclick = function(){
  addBookForm.style.display = "none";
}

uploadBookButton.addEventListener("click", gatherData);

function gatherData(event){ 
  event.preventDefault(); 
  let title = document.getElementById("title").value,
      firstName = document.getElementById("firstName").value,
      lastName = document.getElementById("lastName").value,   
      cost = document.getElementById("cost").value,
      categories = [],
      imageUrl = document.getElementById("url").value,
      author = {};

  author.firstName = firstName;
  author.lastName = lastName;
  
  categories = gatherValuesOfMarkedCheckboxes ();   
  createNewBook(title, author, cost, categories, imageUrl);   
}

function gatherValuesOfMarkedCheckboxes () {
 let checkedCategoriesArr = [],
     allCategoriesArr = [],
     mustRead = document.getElementById("must"),
     bestOf = document.getElementById("best"),
     classic = document.getElementById("classic"), 
     nonFiction = document.getElementById("non");

  allCategoriesArr.push(mustRead);
  allCategoriesArr.push(bestOf);
  allCategoriesArr.push(classic);
  allCategoriesArr.push(nonFiction);

  allCategoriesArr.forEach(function addIfChecked(item) {    
    if (item.checked) {
      checkedCategoriesArr.push(item.value);     
    }    
  }) 

  return checkedCategoriesArr;
}

function createNewBook(title, author, cost, categories, imageUrl) {
  let newBook = {};  

  newBook.id = dataBooksArr.length + 1;
  newBook.title = title;
  newBook.author = author;
  newBook.rating = 0;
  newBook.cost = +cost;
  newBook.categories = categories;
  newBook.createdAt = new Date();
  newBook.updatedAt = 1528046197707;
  newBook.image_url = imageUrl;   
  
  dataBooksArr.push(newBook);
  renderBook(newBook);  
}