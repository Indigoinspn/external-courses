var dataBooks = [{"id":1,"title":"Jewels of Nizam","author":{"firstName":"Geeta","lastName":"Devi"},"rating":5,"cost":100,"categories":["must_read","best","non_fiction"],"createdAt":1506943763424,"updatedAt":1528046197707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/1.jpg"},{"id":2,"title":"Cakes & Bakes","author":{"firstName":"Sanjeev","lastName":"Kapoor"},"rating":5,"cost":200,"categories":["best","classic"],"createdAt":1506943763424,"updatedAt":1525367797707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/2.jpg"},{"id":3,"title":"Jamie\"s Kitchen","author":{"firstName":"Jamie","lastName":"Oliver"},"rating":4,"cost":300,"categories":["non_fiction"],"createdAt":1506943763424,"updatedAt":1530638197707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/3.jpg"},{"id":4,"title":"Inexpensive Family Meals","author":{"firstName":"Simon","lastName":"Holst"},"rating":3,"cost":50,"categories":[],"createdAt":1506943763424,"updatedAt":1520097397707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/4.jpg"},{"id":5,"title":"Paleo Slow Cooking","author":{"firstName":"Chrissy","lastName":"Gawer"},"rating":4,"cost":1000,"categories":["classic"],"createdAt":1506943763424,"updatedAt":1520097397707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/5.jpg"},{"id":6,"title":"Cook Like an Italian","author":{"firstName":"Toble","lastName":"Puttock"},"rating":3,"cost":12,"categories":["non_fiction"],"createdAt":1506943763424,"updatedAt":1520097397707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/6.jpg"},{"id":7,"title":"Suneeta Vaswani","author":{"firstName":"Geeta","lastName":"Devi"},"rating":5,"cost":504,"categories":["must_read","best","non_fiction"],"createdAt":1506943763424,"updatedAt":1517678197707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/7.jpg"},{"id":8,"title":"Jamie Does","author":{"firstName":"Jamie","lastName":"Oliver"},"rating":3,"cost":100,"categories":[],"createdAt":1506943763424,"updatedAt":1538586997707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/8.jpg"},{"id":9,"title":"Jamie\"s Italy","author":{"firstName":"Jamie","lastName":"Oliver"},"rating":5,"cost":100,"categories":["must_read","best"],"createdAt":1506943763424,"updatedAt":1528046197707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/9.jpg"},{"id":10,"title":"Vegetables Cookbook","author":{"firstName":"Matthew","lastName":"Biggs"},"rating":3,"cost":100,"categories":["must_read","non_fiction"],"createdAt":1506943763424,"updatedAt":1522775797707,"image_url":"http://rsu-library-api.herokuapp.com/static/images/10.jpg"}];   
    
var booksContainer = document.getElementById("books-container");


function toPublishBooks(arr){    

    for (var i=0; i< arr.length; i++) {
        booksContainer.innerHTML += "<div class=\"book\">" + 
        "<img src=\"" + arr[i].image_url + "\" alt=\"Image of Book\">" +
        "<div class=\"book-title\">" + arr[i].title + "</div>" +
        "<div class=\"book-author\"> by " + arr[i].author.firstName + " " + arr[i].author.lastName + "</div>"+
        "<div class=\"star-rating-container\"></div></div>"; 
            
        var starRate = arr[i].rating;
        var starRateContainer= booksContainer.getElementsByClassName("star-rating-container")[i];
        var k=0;

        if (starRate === 0) {
            for (k=0; k < 5; k++){
                starRateContainer.innerHTML += " <div class=\"star-whole-empty\"></div> <span> &nbsp;</span>";                      
            }
        }
        else if (starRate < 1) {
            starRateContainer.innerHTML += " <div class=\"star-left-side-filled\"></div>" +
            "<div class=\"star-right-side-empty\"></div> <span> &nbsp;</span>";

            for (k=1; k < 5; k++){
                starRateContainer.innerHTML += " <div class=\"star-whole-empty\"></div> <span> &nbsp;</span>";                      
            }                             
        }        
        else if (starRate >= 1 & starRate <= 5) {

            var wholeFilledStars = Math.round(starRate);
            var emptyStars = 5 - starRate;
            var wholeEmptyStars = Math.round(emptyStars);
            
            for (k=0; k < wholeFilledStars; k++){
                starRateContainer.innerHTML += " <div class=\"star-whole-filled\"></div> <span> &nbsp;</span>";                      
            } 

            if (emptyStars >= 1){
                for (k=0; k < wholeEmptyStars; k++){
                    starRateContainer.innerHTML += " <div class=\"star-whole-empty\"></div><span> &nbsp;</span>";                      
                }              
            }
            if (emptyStars > 0 & emptyStars < 1){
                starRateContainer.innerHTML += "<div class=\"star-left-side-filled\"></div>" +
                "<div class=\"star-right-side-empty\"></div><span> &nbsp;</span>";
            }                                 
        }               
    }
};

toPublishBooks(dataBooks);