$(document).ready(function() {
    //display page based on hash
    var pages = $('section');
    pages.hide().filter(':first').show();

    $(window).bind('hashchange', function () {
        var hash = window.location.hash || '#welcome';
        pages.hide();
        pages.filter(hash).fadeIn(600);
    });

    $(window).trigger('hashchange');
    
    //copyright year
    var now = new Date();
    $('#copyright-year').html(now.getFullYear());
    
    $("#directory table").tablesorter(); 
    
    //menu item click handler
    $('.menu-item').children('span').click(function() {
        window.location.hash = $(this).parent().attr('id').slice(3);
    })

});
