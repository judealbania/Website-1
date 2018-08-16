
    
window.onscroll = function() {
    // console.log(window.screen.availHeight)
    var part1 = document.getElementById("landing");
    var part2 = document.getElementById("portfolio");
    var part3 = document.getElementById("about");
    var part4 = document.getElementById("skills");
    
    var screenHeight = window.screen.availHeight;
    var offset = 50*document.body.scrollTop/screenHeight;
    part1.style.backgroundPosition = "50% " + offset + "%";
    if(offset>10) part2.style.backgroundPosition = "50% " + (offset-10) + "%";
    if(offset>10) part3.style.backgroundPosition = "50% " + (offset-10) + "%";
    if(offset>30) part4.style.backgroundPosition = "50% " + (offset-30) + "%";
}





$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
      $('.scroll .animated').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('fadeInUp slow');
          
        }
    
    
});  
});
});


