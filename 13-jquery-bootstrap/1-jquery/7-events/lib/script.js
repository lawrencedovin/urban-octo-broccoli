$('img').click(() => {
    alert('HOWDY!');
});
// Adds click event listener to all imgs

$('li').on('mouseenter', () => {
     alert('THERE IS A SNAKE IN MY BOOT');
});

$('li').on('mouseleave', () => {
    alert('just a prank bro.');
});

$('img').on('mouseenter', function() {
    $(this).css('border', '10px solid blue');
});

$('img').on("click", function() {
    $(this).remove();
});