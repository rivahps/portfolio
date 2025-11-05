import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Cards.css";

import ImageIcon from "@mui/icons-material/Image";

const CardItem = ({
  text,
  description,
  path,
  src,
  alt = "Card image",
  tags = [],
}) => {
  const hasImage = Boolean(src);
  const shortDesc =
    description?.length > 100 ? description.slice(0, 100) + "..." : description;
  return (
    <div className="cards__item">
      <Link className="cards__item__link" to={path}>
        {hasImage ? (
          <figure className="cards__item__pic-wrap">
            <img className="cards__item__img" alt={alt} src={src} />
          </figure>
        ) : (
          <figure className="cards__item__pic-wrap cards__item__placeholder">
            <div className="cards__item__placeholder-bg">
              <ImageIcon
                className="cards__item__placeholder-icon"
                aria-label="No image"
              />
            </div>
          </figure>
        )}
        <div className="cards__item__info">
          <h5 className="cards__item__text">{text}</h5>
          {shortDesc && <p className="cards__item__desc">{shortDesc}</p>}
          {tags.length > 0 && (
            <div className="cards__item__tags">
              {tags.slice(0, 3).map((tag, idx) => (
                <span className="cards__item__tag" key={idx}>
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="cards__item__tag cards__item__tag--more">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

CardItem.propTypes = {
  text: PropTypes.string.isRequired,
  description: PropTypes.string,
  path: PropTypes.string.isRequired,
  src: PropTypes.string,
  alt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default CardItem;
