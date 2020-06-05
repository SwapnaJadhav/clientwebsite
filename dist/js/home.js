//   $(document).ready(function(){
//     $('a.nav-link').click(function(){
//       $('a.nav-link').removeClass("active");
//       $(this).addClass("a.nav-link.active");
//   });
//   });

// $(document).ready(function () {
//     $('a.nav-link ').click(function(e) {

//         $('a.nav-link.active').removeClass('active');

//         var $parent = $(this).parent();
//         $parent.addClass('active');
//         e.preventDefault();
//     });
// });


$(document).on('click', 'a.nav-link', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

// $('#aboutus1').click(function(){
//     $(document).scrollTop(500) 
//     });