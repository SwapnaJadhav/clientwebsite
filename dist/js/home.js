$(document).ready(function () {
    $('.nav-link ').click(function(e) {

        $('.nav-link').removeClass('active');

       // var $parent = $(this).parent();
        //$parent.addClass('active');
        $(this).addClass("active");
        if($(".nav-link.index1_link").length>=1){
       e.preventDefault();
        
       $('#homelink').click(function(e){
        window.scrollTo(0,-1);
       });
      $('#whatwedolink').click(function(e){
        window.scrollTo(0,420);
       });
       $('#blogslink').click(function(e){
        window.scrollTo(0,1650);
       });
       $('#aboutuslink').click(function(e){
        window.scrollTo(0,3200);
       });
       $('#contactuslink').click(function(e){
        window.scrollTo(0,4200);
       });
    }
    });
});

