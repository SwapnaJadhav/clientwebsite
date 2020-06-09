$(document).ready(function () {
    $('.nav-link ').click(function(e) {

        $('.nav-link').removeClass('active');

       // var $parent = $(this).parent();
        //$parent.addClass('active');
        $(this).addClass("active");
      //  e.preventDefault();
    });
});


$(function(){
  $('a[href*=\\#]:not([href=\\#])').on('click', function(){
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
    if(target.length){
      $('html,body').animate({
        scrolltop: target.offset().top
      }, 1000);
      return false;
    }
  });
});

// $('#aboutus1').click(function(){
//     $(document).scrollTop(500) 
//     });