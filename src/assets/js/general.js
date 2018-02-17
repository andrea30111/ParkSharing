
$(document).on("click", ".show", function(){
    $(".park-tails").toggleClass("down");
    $(this).toggleClass("up");
});

$(document).on("click", ".park-tail", function(){
    $(this).toggleClass("active");
    $(".park-tails").removeClass("down");
    $(this).siblings().removeClass("active");
});