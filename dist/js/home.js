// var navlContainer = document.getElementById("mydiv");

// var header = document.getElementById("myDIV");
// var navlks = header.getElementsByClassName("bbottm");
// for (var i = 0; i < btns.length; i++) {
//   navlks[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

//   $(document).ready(function(){
//     $('a.nav-link.active').click(function(){
//       $('a.nav-link').removeClass("active");
//       $(this).addClass("a.nav-link.active");
//   });
//   });

$(document).ready(function () {
    $('.a.nav-link ').click(function(e) {

        $('.a.nav-link.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
        e.preventDefault();
    });
});

// $('#aboutus1').click(function(){
//     $(document).scrollTop(500) 
//     });