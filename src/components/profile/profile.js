import React from 'react';
import PropTypes from 'prop-types';
import './profile.css';

const Profile = (props) => {
      console.log(props);
      return(
        <div className="profile" data-testid="Profile">
    <h1>
      User Profile
    </h1>
    <p><span className='heading'>Name  </span> <span className='value'>{props.name}</span></p>
    <p><span className='heading'>ID  </span> <span className='value'>{props.id}</span></p>
    <p><span className='heading'>Mobile Number </span> <span className='value'>{props.mobile}</span></p>
    <p><span className='heading'>Email  </span> <span className='value'>{props.email}</span></p>
    <p>{props.phone}</p>
  </div>
      )
}

const isMobile=function isValidMobile(props,mobile){
  var IndNum = /^[0]?[7896]\d{9}$/;
  if(!IndNum.test(props[mobile])){
    return new Error("The mobile number is invalid.Please provide a valid mobile number");
  }
}

Profile.propTypes = {
  name:PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
  mobile:isMobile,
  email:PropTypes.string.isRequired,
  phone:PropTypes.func,
};

Profile.defaultProps = {
  
};

export default Profile;


