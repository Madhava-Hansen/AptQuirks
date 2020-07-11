import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {faTimes, faShare, faHandHoldingUsd} from '@fortawesome/fontawesome-free-solid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withRouter} from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const SweepstakesPromotionalModal = ({history}) => {

  const [isOpenClass, setIsOpenClass] = useState('hidden');

  const handleCloseModal = () => {
    setIsOpenClass('hidden');
    sessionStorage.setItem('sweepstakesModalClosed', true)
  }

  useEffect(() => {
    if ((!sessionStorage.getItem('sweepstakesModalClosed')) && (history.location.pathname.split('com/').pop() !== '/giveaway')) {
      setTimeout(() => {
        setIsOpenClass('');
      }, 5000)
    }
  }, [])
  return (
    <div className={`SweepstakesPromotionalModal ${isOpenClass}`}>
      <div className="SweepstakesPromotionalModal-modal">
      <h1 className="SweepstakesPromotionalModal-title">Apartment Quirks Giveaway!</h1>
      <div className="SweepstakesPromotionalModal-mainContent">
        <FontAwesomeIcon 
          className="SweepstakesPromotionalModal-closeModalIcon"
          size="3x"
          icon={faTimes} 
          onClick={handleCloseModal}
        />
        <div>
          <p className="SweepstakesPromotionalModal-subTitle">Write a review</p>
          <StarRatings 
            rating={4}
            starRatedColor="#FDCC0D"
            numberOfStars={5}
            starDimension="30px"
            starSpacing="8px"
          />
          <p className="SweepstakesPromotionalModal-subTitle">Like and share on Facebook</p>
          <FontAwesomeIcon 
            className="SweepstakesPromotionalModal-shareIcon"
            size="3x"
            icon={faShare} 
          />
          <p className="SweepstakesPromotionalModal-subTitle">Win free rent!</p>
          <FontAwesomeIcon 
            className="SweepstakesPromotionalModal-moneyIcon"
            size="3x"
            icon={faHandHoldingUsd} 
          />
        </div>
        <Link to="/giveaway">
          <button onClick={handleCloseModal} className="SweepstakesPromotionalModal-reviewButton">Write a Review</button>
        </Link>
      <p className="SweepstakesPromotionalModal-noPurchaseNecessary">No purchase necessary, terms and conditions apply.</p>
      <div className="SweepstakesPromotionalModal-termsWrapper">
        <a target="_blank" href="https://app.termly.io/document/terms-of-use-for-website/c1ad278a-901a-4f1b-9e14-54e318c56599">Terms and Conditions</a>
        <a target="_blank" href="https://res.cloudinary.com/aptquirks/image/upload/v1594226262/Apartment_Quirks_Giveaway_Terms_and_Conditions_x2ndlz.pdf">Giveaway Rules</a>
        <a target="_blank" href="https://app.termly.io/document/privacy-policy/3a1d9dd9-cb57-4685-9708-1719215c6bec">Privacy Policy</a>
      </div>
      </div>
      </div>
    </div>
  )
}

export default withRouter(SweepstakesPromotionalModal);