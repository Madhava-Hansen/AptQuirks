import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from '@fortawesome/fontawesome-free-solid'

export const SessionGateway = ({hendleCloseSessionGateway}) => {
  return (
    <div onClick={hendleCloseSessionGateway} className="SessionGateway">
      <div className="SessionGateway-mainContent">
      <div className="SessionGateway-closeModalIcon" onClick={hendleCloseSessionGateway}>
        <FontAwesomeIcon 
          size="3x"
          icon={faTimes} 
        />
      </div>
      <h1 className="SessionGateway-titleText">Know before you sign.</h1>
        <div className="SessionGateway-linksWrapper">
          <p className="SessionGateway-subTitle">Create an account or login to like apartments, post reviews, message users, upload images and update your account details.</p>
          <Link to="/signup">
            <div className="SessionGateway-buttonSignup">
              Signup
            </div>
          </Link>
          <p className="SessionGateway-orText">Or</p>
          <Link to="/login">
            <div className="SessionGateway-buttonLogin">
              Login
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}