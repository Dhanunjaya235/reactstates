import React from 'react';
import PropTypes from 'prop-types';
import './properties.css';

const Properties = (props) => (
  <div className="properties" data-testid="Properties">
   <h1>
    Welcome To React World,{props.name}
   </h1>
   <h3>
    We have registered you with this id {props.id}
   </h3>
  </div>
);

Properties.propTypes = {
  name:PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
};

Properties.defaultProps = {};

export default Properties;
