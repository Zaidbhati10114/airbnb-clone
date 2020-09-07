import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total
}) {
  return (
    <div className="search__result">
      <img src={img} alt="img" />
      <FavoriteBorderIcon className="search__result-heart" />
      <div className="search__result-info">
        <div className="search__result-top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
        </div>
        <div className="search__result-bottom">
          <div className="search__result-stars">
            <StarIcon className="search__result-star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
        </div>
        <div className="search__result-price">
          <h2>{price}</h2>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
