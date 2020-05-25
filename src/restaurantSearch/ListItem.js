import React from "react";
import PropTypes from "prop-types";
import { generateListFromValue } from "./utils";

const ListItem = ({ item, isDesktop }) => (
  <div className="list-item">
    <div className="list-item__left">
      <strong>{item.name}</strong>
      <div>
        <b>Address: </b>
        {item.address}, {item.city}
      </div>
      <div>
        <b>Price: </b>
        {generateListFromValue(item.price).map(() => "$")}
      </div>
    </div>

    <div className="list-item__right">
      <a
        href={isDesktop ? item.reserve_url : item.mobile_reserve_url}
        className="list-item__link"
        alt=""
        target="_blank"
        rel="noopener noreferrer"
        title={`Book ${item.name} now. Clicking this will open a new window`}
      >
        Book now
      </a>
    </div>
  </div>
);

ListItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  isDesktop: PropTypes.bool.isRequired,
};

export default ListItem;
