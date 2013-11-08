//Refreshes section
function DisplaySection(clicked) {
    //get showing section
    displayed = '';
    $('section').each(function() {
        if($(this).css('display') == 'block') {
            displayed = $(this).attr('id');
        }
    });
    
    //swap to clicked on section
    $('#' + displayed).hide(0, function () {
        $('#' + clicked).fadeIn(600)
    });
}

$(document).ready(function() {
    //On load hide all except main.
    $('section').hide();
    $('#main').show();
    
    //copyright year
    var now = new Date();
    $('#copyright-year').html(now.getFullYear());
    
    $("#directory table").tablesorter(); 
    
    //menu item click handler
    $('.menu-item').click(function() {
        $('.menu-item').removeClass('selected');
        $(this).addClass('selected');
        DisplaySection($(this).attr('id').slice(3));
    })
});
