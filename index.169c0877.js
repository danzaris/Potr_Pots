$(document).ready(function(){window.innerWidth<768&&($(".carousel").slick({dots:!1,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,initialSlide:0}),$(".carousel").on("afterChange",function(i,e,a){$(".indicator").removeClass("active"),$(".indicator").eq(a).addClass("active")}),$(".indicator").eq(0).addClass("active"))});
//# sourceMappingURL=index.169c0877.js.map
