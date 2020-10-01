const $movieList = $('#movie-list');
const $movieForm = $('#movie-form');

$movieForm.on('submit', function (e) {
    let $movieTitle = `<td>${$("#movie-title").val()}</td>`;
    let $movieRating = `<td>${$("#movie-rating").val()}</td>`;
    let $button = '<td><i class="fas fa-times remove-button"></i></td>';

    e.preventDefault();

    if($.trim($("#movie-title").val()) === '') alert("Please enter Movie Title.");
    else $($movieList).append(`<tr>${$movieTitle}${$movieRating}${$button}</tr>`);
});

$movieList.on('click', '.remove-button', function() {
    $(this).parents('tr').remove();
})