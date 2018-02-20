
$(document).on("click", ".show", function(){
    $(".park-tails").toggleClass("down");
    $(".park-tail").removeClass("booking");
    $(this).toggleClass("up");
});


$(document).on("click", ".park-tail", function(){
    $(this).addClass("booking");
    $(this).parents(".bx-viewport").addClass("booking");
    $(".park-tails").removeClass("down");
    $(this).siblings().removeClass("booking");
});

$(document).on("click", ".input-wrapper .label-md", function(){
    $(".searchbar-input").val($(this).text());
});


