/**************** Gamburger icon and Dropdown menu ***********************/

var gamburger = document.getElementById("gamburger-icon");
var dropdownMenu = document.getElementById("dropdown-menu");

function toggleDropdownMenu(){     
    if(dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    }
    else {
        dropdownMenu.style.display= "block"; 
    }    
}

function hideDropdownMenu(){
    var width = window.innerWidth    
    if (width <= 1345) {        
        dropdownMenu.style.display= "none"; 
    }     
}
/**************** Search icon and search field ***********************/

var searchContainer = document.getElementById("search-container");
var searchForm = document.getElementById("search-form");
var searchField = document.getElementById("search-field");
var searchIcon = document.getElementById("search-icon");

function toggleSearchForm(){    
    if(searchForm.style.display === "block" ) {
        searchForm.style.display = "none";
        searchIcon.style.color = "#969798";
    }
    else if (searchForm.style.display=== "none" || searchForm.style.display=== "") {
        searchForm.style.display = "block";
        searchIcon.style.color = "#3687c4";       
    }     
}

function searchIconChangeColor () {
    searchIcon.style.color="#3687c4";
}

function searchIconChangeColorBack () {
    searchIcon.style.color="#969798";
}
/**************** Contact icons and geolocation ***********************/

var contacts = document.getElementById("contacts");
var popUp = document.getElementById("tooltip");

function showGeoLocation() {
    popUp.style.display= "block";    
}

function hideGeoLocation() {
    popUp.style.display= "none";    
}

/***************************** Sliders *******************************/
var sliderContainer = document.getElementById("slider-container");

function toggleHeart(event){
    var target = event.target;  
    if (target.tagName != 'I') return;

    if(target.attributes[0].nodeValue.includes("far")) {
        target.attributes[0].nodeValue ="fas fa-heart";       
    }
    else {target.attributes[0].nodeValue ="far fa-heart";   
    } 
}

/************************ EVENT LISTENERS ****************************/

searchIcon.addEventListener("click", toggleSearchForm);
gamburger.addEventListener("click", toggleDropdownMenu);
dropdownMenu.addEventListener("mouseleave", hideDropdownMenu);
searchField.addEventListener("focus", searchIconChangeColor);
searchField.addEventListener("blur", searchIconChangeColorBack);
contacts.addEventListener("mouseover", showGeoLocation);
contacts.addEventListener("mouseout", hideGeoLocation);
sliderContainer.addEventListener("click", toggleHeart);
