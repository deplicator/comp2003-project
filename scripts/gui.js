//http://www.abeautifulsite.net/blog/2011/11/detecting-mobile-devices-with-javascript/
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(document).ready(function() {
    //display page based on hash
    var pages = $('section');
    pages.hide().filter(':first').show();

    $(window).bind('hashchange', function () {
        var hash = window.location.hash || '#welcome';
        pages.hide();
        pages.filter(hash).fadeIn(600);
        
        //changes random-img class images on each page refresh.
        var rimg = Math.floor(Math.random()*15) + 1;
        pages.filter(hash).children('.random-img').attr("src", "images/random/" + rimg + ".jpg");
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
    
    //Imagine yourself here easter egg
    $('#imagine').click(function() {
        $('#imagine').hide();
        $('#easter-egg').show();
        var randomsong = Math.floor(Math.random() * 6) + 1;
        $('#easter-egg').attr("src", "downloads/song" + randomsong + ".mp3");
        $('#easter-egg')[0].volume = 0.5;
        $('#easter-egg')[0].play();
    });
    
    if(isMobile.any()) {
        $('#non-mobile').remove();
        $('head').append('<link rel="stylesheet" href="css/mobile.css" />');
    }
});
