/**************** Gamburger icon and Dropdown menu ***********************/

var gamburger = document.getElementById("gamburger-icon");
var dropdownMenu = document.getElementById("dropdown-menu");


function showDropdownMenu(){
    dropdownMenu.style.display= "block"; 
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


function showSearchForm(){
    searchForm.style.display= "block"; 
}

function searchIconChangeColor () {
    searchIcon.style.color="#3687c4";
}

function searchIconChangeColorBack () {
    searchIcon.style.color="#969798";
}

/**************** Contact icons and geolocation ***********************/

var geoIcon = document.getElementById("geo");
var popUp = document.getElementById("tooltip");

function showGeoLocation() {
    popUp.style.display= "block";    
}

function hideGeoLocation() {
    popUp.style.display= "none";    
}


/************************ EVENT LISTENERS ****************************/

searchContainer.addEventListener("click", showSearchForm);
gamburger.addEventListener("click", showDropdownMenu);
dropdownMenu.addEventListener("mouseleave", hideDropdownMenu);
searchField.addEventListener("focus", searchIconChangeColor);
searchField.addEventListener("blur", searchIconChangeColorBack);
geoIcon.addEventListener("click", showGeoLocation);
geoIcon.addEventListener("mouseout", hideGeoLocation);