import React, { useState } from 'react';
import './hooks.css';

function Hooks() {
  const [name, SetName] = useState('');
    function displayName(event) {
    SetName(event.target.value);  }

  return(
    <div className='hooks'>
    <p>Enter your Name : <input type="text" value={name} onChange={displayName} placeholder="Enter Your Name" /></p>
    <p>Name: {name}</p>
    </div>
  );
}

Hooks.propTypes = {};

Hooks.defaultProps = {};

export default Hooks;

