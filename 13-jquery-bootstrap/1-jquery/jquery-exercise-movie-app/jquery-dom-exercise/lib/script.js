$(function() {
    console.log('Let’s get ready to party with jQuery!');
    // 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!” 
    $('article > img').addClass('image-center');
    // 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head). 
    $('article > p').eq(-1).remove();
    // 3. Remove the last paragraph in the article. 
    $('#title').css('font-size', (Math.floor(Math.random() * 101)));
    // 4. Set the font size of the title to be a random pixel size from 0 to 100. 
    $('ol').append('<li>Chocolate Milk <3</li>');
    // 5. Add an item to the list; it can say whatever you want.
    $('aside').empty().append("<p>I'm sorry for the list's existence</p>");
    // 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
    $("input").on('keyup blur change', function () {
        let $red = $("input").eq(0).val();
        let $blue = $("input").eq(1).val();
        let $green = $("input").eq(2).val();
        $("body").css("background", `rgb(${$red}, ${$blue}, ${$green})`);
      });
    // 7. When you change the numbers in the three inputs on the bottom,
    // the background color of the body should change to match whatever the three values in the inputs are. 
    $('img').on('click', function() {
        $(this).remove();
    });
    // 8. Add an event listener so that when you click on the image, it is removed from the DOM. 
});