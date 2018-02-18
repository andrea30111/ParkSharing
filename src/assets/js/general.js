
$(document).on("click", ".show", function(){
    $(".park-tails").toggleClass("down");
    $(".park-tail").removeClass("active").removeClass("booking");
    $(this).toggleClass("up");
});

$(document).on("click", ".park-tail:not('.book')", function(){
    $(this).toggleClass("active");
    $(".park-tails").removeClass("down");
    $(this).siblings().removeClass("active");
});

$(document).on("click", ".book", function(){
    $(this).parent().addClass("booking");
    $(this).parent().siblings().removeClass("booking");
});

$(document).on("click", ".input-wrapper .label-md", function(){
    $(".searchbar-input").val($(this).text());
});
