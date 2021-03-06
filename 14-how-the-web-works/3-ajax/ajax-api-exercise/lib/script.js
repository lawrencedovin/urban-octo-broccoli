/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */


/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {
  const NO_IMAGE = 'https://store-images.s-microsoft.com/image/apps.65316.13510798887490672.6e1ebb25-96c8-4504-b714-1f7cbca3c5ad.f9514a23-1eb8-4916-a18e-99b1a9817d15?mode=scale&q=90&h=300&w=300';
  const response = await axios.get("http://api.tvmaze.com/search/shows", {
    params: { q: query },
  });

  let shows = response.data.map((result) => {
    let {show} = result;
    return {
        id: show.id,
        name: show.name,
        summary: show.summary,
        image: show.image ? show.image.medium : NO_IMAGE
      };
  });

  return shows;
}



/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
         <img class="card-img-top" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <button class="btn btn-primary get-episodes">Episodes</button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($item);
    console.log($(".card").data("showId"));
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});


/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  // TODO: get episodes from tvmaze
  //       you can get this by making GET request to
  //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes
  const response = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
  const { data } = response;
  let episodes = data.map((result) => {
    let episode = result;
    return {
      id: episode.id,
      name: episode.name,
      season: episode.season,
      number: episode.number
    };
  });
  return episodes;

  // for(let d of data) {
  //   console.log(`${d.name} (season ${d.season}, episode ${d.number})`);

  // }
  // TODO: return array-of-episode-info, as described in docstring above
}

async function populateEpisodes(episodes) {
  $('#episodes-list').empty();
  for(let episode of episodes) {
    const $newEpisodeInfo = $(`<li>${episode.name} (season ${episode.season}, ${episode.number})</li>`);
    $("#episodes-list").append($newEpisodeInfo);
  }
  $("#episodes-area").show();
}

/** Handle click on show name. */

$("#shows-list").on("click", ".get-episodes", async function handleEpisodeClick(evt) {
  let showId = $(evt.target).closest(".show").data("show-id");
  // Finds the closest element with the class of show and checks for it's data attribute 
  // data-show-id
  console.log($(evt.target));
  let episodes = await getEpisodes(showId);
  populateEpisodes(episodes);
});


