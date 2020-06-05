//   $(document).ready(function(){
//     $('a.nav-link').click(function(){
//       $('a.nav-link').removeClass("active");
//       $(this).addClass("a.nav-link.active");
//   });
//   });

$(document).ready(function () {
    $('.nav-link ').click(function(e) {

        $('.nav-link').removeClass('active');

       // var $parent = $(this).parent();
        //$parent.addClass('active');
        $(this).addClass("active");
      //  e.preventDefault();
    });
});

// $('#aboutus1').click(function(){
//     $(document).scrollTop(500) 
//     });