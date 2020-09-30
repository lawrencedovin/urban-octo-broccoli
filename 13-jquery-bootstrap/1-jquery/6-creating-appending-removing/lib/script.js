$('ul').append('<li class="highlight">I AM FREE!!!</li>');
$('li').append('<input type="checkbox"/>');
$('li').prepend('<input type="checkbox"/>');

$('<h1>Hello</h1>').css('color', 'orange').appendTo('p');
// Creates a new h1 element, appends to inside the p

$('li').after('<bold>Hi</bold');
// Comes after the li outside of it

$('h1').remove();
// Removes all h1