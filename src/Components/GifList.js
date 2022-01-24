import React from "react";
import Gif from "./Gif";
import NoGifs from "./NoGifs";
import propTypes from "prop-types";

const GifList = ({ data }) => {
  if (data.length > 0) {
    let gifs = data.map((gif) => {
      return <Gif url={gif.images.fixed_height.url} key={gif.id} />;
    });
    return <ul className="gif-list">{gifs}</ul>;
  } else {
    {
      return <NoGifs />;
    }
  }
};

// GifList.propTypes = {
//   data: propTypes.arrayOf(propTypes.object).isRequired,
// };
export default GifList;
