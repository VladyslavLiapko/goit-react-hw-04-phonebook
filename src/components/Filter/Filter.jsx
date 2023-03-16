import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onChangeFilter }) => {
    
    return (
        <div>
            <label>Find contacts by name: </label>
            <input
                type="text"
                value={value}
                onChange={onChangeFilter}
            />
        </div>
    );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};
