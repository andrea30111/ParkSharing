
$(document).on("click touch", ".show", function(){
    $(".park-tail").removeClass("booking");
    
});


$(document).on("click touch", ".back", function(){
    $(this).parents(".park-tail").animate({height: 100}).removeClass("booking").removeAttr("style");
});

$(document).on("click touch", ".edit", function(){
    $(".edit-form").toggle();
});

$(document).on("click touch", ".park-tail:not(.booking)", function(){
    $(this).addClass("booking");
    $(this).animate({height: ($(window).height() - 90) }); 
    $(this).parents(".bx-viewport").addClass("booking");
    $(this).siblings().removeClass("booking").removeAttr("style");
    centerItFixedWidth(this, ".park-tails");
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


