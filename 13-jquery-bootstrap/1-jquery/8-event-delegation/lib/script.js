$('#add-input').on('click', function() {
    $('form').append('<input type="text"/>');
});

// $('input').on('focus', function() {
//     $(this).val('BAMBOOZLED');
// });

$('form').on('focus', 'input', function() {
    $(this).val('BAMBOOZLED');
    // this is set to the particular input
});

// Targets the form and if an input is focused 
// adds the val to BAMBOOZLED to newly created input.

// Event delegation allows newly created elements to pass 
// previously created events to it.