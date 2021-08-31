"use strict";

/**Step 1 */
$(function() {console.log("Get ready to party with jQuery!")})

/**Step 2 */
$("article").find("img").addClass("image-center")
//Solution: $("article img").addClass("image-center");

/**Step 3 */
$("#fifthP").remove()
//Solution: $("article p:last-child").remove();

/**Step 4 */
$("h1").css("font-size",Math.random()*100);
//Solution: $("#title").css("font-size", Math.random() * 100);

/**Step 5 */
$("aside").find("ol").append("<li>We finally figured this out!")
//Solution: $("ol").append($("<li>", { text: "I can add to lists with jQuery!" }));

/**Step 6 */
$("aside").text("").append("<p>Scratch that, lists are silly, we're sorry for the bother!")
/**Solution:
 * $("aside")
      .empty()
      .append($("<p>", { text: "Sorry about that list :(" })); */

/**Step 7 */
$(".form-control").on("change", function (evt) {
    const red = $(".form-control").eq(0).val();
    const blue = $(".form-control").eq(1).val();
    const green = $(".form-control").eq(2).val();
    $("body").css("background-color",`rgb(${red},${green},${blue}`)
})

/**Solution:
 *   $(".form-control").on("keyup blur change", function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });
 */

/**Step 8 */
$(".image-center").on("click", function () {
    $("article").find(".image-center").remove()
})
/**
 * Solution: 
 * $("img").on("click", function (evt) {
    $(evt.target).remove();
  });
 */
