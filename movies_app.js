"use strict";

//console.log("hi there")

/*$("#submitButton").on("click", function(){
    const movieName = $("#movieName").val()
    const movieRating = $("#movieRating").val()
    console.log(`this works. movie name: ${movieName} movie rating: ${movieRating}`)
    $("#movieList").append(`<li> ${movieName} : ${movieRating}` )
})*/

$("#submitButton").on("click", function () {
    const movieName = $("#movieName").val()
    const movieRating = $("#movieRating").val()
    console.log(`this works. movie name: ${movieName} movie rating: ${movieRating}`)
    $("#movieList").append(`<li id=${movieName}> ${movieName} : ${movieRating} ---- <input type="submit" value="remove" class="removeButton">`)
})

$('#movieList').on("click", "li", function (evt) {
    evt.target.closest("li").remove();
})