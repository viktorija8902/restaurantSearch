import React from "react";
import PropTypes from "prop-types";

const ListItem = (item) => {
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.address}</div>
      <div>{item.price}</div>
    </div>
  );
};
ListItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ListItem;
