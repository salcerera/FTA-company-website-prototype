// Smooth Scroll
$(document).ready(function() {
    $('.smooth-scroll').click(function(e) {
      var linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top
      }, 1000);
      e.preventDefault();
    });
  
});

$(document).ready(function() {
    $("toggle").click(function(){
        $(".mobile-nav").removeClass(".mobile-hide");
    });
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 300) {
        document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.85)";
        document.getElementById("navbar").style.minHeight = "40px";
        document.getElementById("navbar").style.transition = "all 0.5s ease-in-out";
    } else {
        document.getElementById("navbar").style.minHeight = "100px";
        document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.65)";
    }
}

