$(document).on("click touch", ".back", function(){
    $(this).parents(".park-tail").animate({height: 100}).removeClass("booking").removeAttr("style");
    $(".park-tails").css("overflow","auto");
    $("#google-places-autocomplete").animate({padding: '60px'}); 
    $(".searchbar-md, .flaticon-left-arrow").slideDown();
});

$(document).on("click", ".boss:not(.fab-close-active)", function(){
    $(".tabs").removeClass("opacity");
});

$(document).on("click touch", ".boss.fab-close-active", function(){
    $(".tabs").addClass("opacity");
});

$(document).on("click touch", ".slave", function(){
    $(".boss").removeClass("fab-close-active");
    $(".list").removeClass("fab-list-active");
    $(".tabs").removeClass("opacity");
});

$(document).on("click touch", ".edit-form-button", function(){
    $(".edit-form").slideToggle();
    $(".bottom").addClass("edit");
    $(".user-img").animate({height:'100px',width:'100px'});
    $(".hide-edit").slideToggle();
});

$(document).on("click touch", ".confirm-form-button", function(event){
    $(".edit-form").slideToggle();
    $(".user-img").animate({height:'200px', width:'200px' });
    $(".hide-edit").slideToggle();
    $(".bottom").removeClass("edit");
    event.preventDefault();
    event.stopPropagation();
});

$(document).on("click touch", ".flaticon-left-arrow.show", function(event){
    $("#google-places-autocomplete").animate({padding:'350px'});
    $(".searchDate").slideDown('slow');
    $(this).addClass("close");
});

$(document).on("click touch", ".flaticon-left-arrow.close.show", function(event){
    $("#google-places-autocomplete").animate({padding:'60px'});
    $(".searchDate").slideUp('slow');
    $(this).removeClass("close");
});

$(document).on("click touch", "button.search", function(event){
    $("#google-places-autocomplete").animate({padding:'60px'});
    $(".searchDate").slideUp('slow');
    $(".flaticon-left-arrow").removeClass("close");
});

$(document).on("scroll", function(event){
    $(".addPark").hide();
});




$(document).on("click touch", ".park-tail:not(.booking)", function(){
    $(this).addClass("booking");
    $(this).animate({height: ($(window).height()), backgroundColor:'#4E1402'}); 
    $(".park-tails").css("overflow","hidden");
    $(this).siblings().removeClass("booking").removeAttr("style");
    centerItFixedWidth(this, ".park-tails");
    $(this).find(".bxslider").bxSlider();
    $("#google-places-autocomplete").animate({padding: '10px'}); 
    $(".searchbar-md, .flaticon-left-arrow").slideUp();
});

function getViewportOffset($e) {
    var $window = $(window),
      scrollLeft = $window.scrollLeft(),
      scrollTop = $window.scrollTop(),
      offset = $e.offset(),
      rect1 = { x1: scrollLeft, y1: scrollTop, x2: scrollLeft + $window.width(), y2: scrollTop + $window.height() },
      rect2 = { x1: offset.left, y1: offset.top, x2: offset.left + $e.width(), y2: offset.top + $e.height() };
    return {
      left: offset.left - scrollLeft,
      top: offset.top - scrollTop,
      insideViewport: rect1.x1 < rect2.x2 && rect1.x2 > rect2.x1 && rect1.y1 < rect2.y2 && rect1.y2 > rect2.y1
    };
}

function centerItFixedWidth(target, outer){
    var out = $(outer);
    var pos = getViewportOffset($(target));
    out.animate({scrollLeft:'+='+pos.left+''},500);
  }

$(document).on("click touch", ".input-wrapper .label-md", function(){
    $(".searchbar-input").val($(this).text());
});


