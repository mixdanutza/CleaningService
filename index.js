$("#home").click(function() {
    console.log("In sript load")
    $('html,body').animate({
        scrollTop: $(".header").offset().top},
        'slow');
});

$("#contact").click(function() {
    console.log("In sript load")
    $('html,body').animate({
        scrollTop: $(".contact-container").offset().top},
        'slow');
});

$("#services").click(function() {
    console.log("In sript load")
    $('html,body').animate({
        scrollTop: $("#wrap").offset().top},
        'slow');
});


// $("#about").click(function() {
//     console.log("In sript load")
//     $('html,body').animate({
//         scrollTop: $(".about").offset().top},
//         'slow');
// });


