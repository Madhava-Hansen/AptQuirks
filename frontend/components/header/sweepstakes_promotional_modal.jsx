import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {faTimes, faShare, faMoneyBill} from '@fortawesome/fontawesome-free-solid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withRouter} from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const SweepstakesPromotionalModal = ({history}) => {

  const [isOpenClass, setIsOpenClass] = useState('hidden');

  const handleCloseModal = e => {
    if (['SweepstakesPromotionalModal', "SweepstakesPromotionalModal-reviewButton"].includes(e.target.classList[0]) || ["SweepstakesPromotionalModal-closeModalIcon"].includes(e.currentTarget.classList[0])) {
      setIsOpenClass('hidden');
      sessionStorage.setItem('sweepstakesModalClosed', true);
    }
  }

  useEffect(() => {
    if ((!sessionStorage.getItem('sweepstakesModalClosed')) && (history.location.pathname.split('com/').pop() !== '/giveaway') && (!sessionStorage.getItem('blockGiveawayModal'))) {
      setTimeout(() => {
        setIsOpenClass('');
      }, 5000)
    }
  }, [])
  return (
    <div onClick={handleCloseModal} className={`SweepstakesPromotionalModal ${isOpenClass}`}>
      <div value="main" className="SweepstakesPromotionalModal-modal">
      <h1 className="SweepstakesPromotionalModal-title">Apartment Quirks Giveaway!</h1>
      <div className="SweepstakesPromotionalModal-mainContent">
        <h1 className="SweepstakesPromotionalModal-advert">Win FREE Rent</h1>
        <div onClick={handleCloseModal} className="SweepstakesPromotionalModal-closeModalIcon">
          <FontAwesomeIcon 
            size="3x"
            icon={faTimes} 
          />
        </div>
        <div className="SweepstakesPromotionalModal-infoGraphicsWrapper">
            <div className="SweepstakesPromotionalModal-infoGraphicItem">
              <p className="SweepstakesPromotionalModal-subTitle">Review an apartment</p>
              <StarRatings 
                rating={4}
                starRatedColor="#FDCC0D"
                numberOfStars={4}
                starDimension="25px"
                starSpacing="0px"
              />
            </div>
            <div className="SweepstakesPromotionalModal-infoGraphicItem">
              <p className="SweepstakesPromotionalModal-subTitle">Like or share (optional)</p>
              <FontAwesomeIcon 
                className="SweepstakesPromotionalModal-shareIcon"
                size="3x"
                icon={faShare} 
              />
            </div>
            <div className="SweepstakesPromotionalModal-infoGraphicItem">
              <p className="SweepstakesPromotionalModal-subTitle">Win free rent!</p>
              <FontAwesomeIcon 
                className="SweepstakesPromotionalModal-moneyIcon"
                size="3x"
                icon={faMoneyBill} 
              />
            </div>
          <div>
          </div>
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