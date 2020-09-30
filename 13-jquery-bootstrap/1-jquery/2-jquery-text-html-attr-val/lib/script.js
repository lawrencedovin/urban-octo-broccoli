$('h1').text('lawrence pogi');
// Selecting and changing all at once

// $('li').text('I AM LI');
// Changes all li inner text to I AM LI

$('li').html('<b>BOLDDDD</b>')
// Changes all li to be bold with inner text to BOLDDDD

$('a').attr('href', 'https://www.chickennuggets.com');

const newAttrs = {src: 'https://i.pinimg.com/236x/4c/08/23/4c082366b3e137009286f9dbaba72150.jpg', alt: 'Happy Sloth'};

$('img').attr(newAttrs);
// Updates all images to new src and adds an alt tag

$('input').eq(0).val()
// Finds value of first input

$('input').val('')
// Resets all input values to blank