$('img').on('click', function() {
    $(this).fadeOut();
});

// Stays on page sets display: none

$('img').on('click', function() {
    $(this).fadeOut(function(){
        $(this).remove();
    });
});

// Removes when the fade finishes

$('img').on('click', function() {
    $(this).fadeOut(3000, function(){
        $(this).remove();
    });
});

// Adjusts a timer


$('img').on('click', function() {
    $(this).animate({
        opacity: 0,
        width: '500px',
    }, 2000, function() {
        $(this).remove();
    });
});

// Usually use keyframes but jQuery animations are good for
// quick things like opacity

