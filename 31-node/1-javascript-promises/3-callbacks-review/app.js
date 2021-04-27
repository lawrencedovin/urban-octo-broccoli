let planet;

$.getJSON("https://swapi.dev/api/planets/1/", response => {
    planet = response;
    console.log(planet);
    $.getJSON(planet.residents[0], response => {
        resident = response;
        console.log(resident);
        $.getJSON(resident.films[0], response => {
            film = response;
            console.log(film);
        });
    });

});