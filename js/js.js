$(document).ready(function(){
    $('.carousel').slick({
        dots:true
    });
});

$(document).ready(function() {
    $('.menu-burger').click(function(event) {
        $('.menu-burger, .wrapper').toggleClass('active');
    });
});