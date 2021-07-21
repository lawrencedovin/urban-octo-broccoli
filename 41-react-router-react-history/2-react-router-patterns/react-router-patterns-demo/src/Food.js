import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GIPHY_URL = "http://api.giphy.com/v1";
function Food() {
  // name is coming as a Route parameter
  const { name } = useParams();
  const [src, setSrc] = useState(null);

  useEffect(() => {
    // searchTerm will take in the name path variable from Route
    // <Route path="/food/:name">
    //     <Food />
    // </Route>
    // if /food/burrito plugs into searchTerm burrito
    async function fetchGif(searchTerm) {
      let res = await axios.get(`${GIPHY_URL}/gifs/search`, {
        params: { q: searchTerm, api_key: "dc6zaTOxFJmzC" }
      });
      // Calls the searchTerm so if burrito is passed in
      // gets the first burrito image url
      setSrc(res.data.data[0].images.original.url);
    }
    fetchGif(name);
  }, [name]);

  let img = src ? <img src={src} alt={name} /> : null;
  return (
    <div>
      <h1>Here's a pic of {name}.</h1>
      {img}
    </div>
  );
}
export default Food;
