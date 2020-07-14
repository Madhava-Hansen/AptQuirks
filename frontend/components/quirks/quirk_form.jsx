import React, {useState} from "react";
import { withRouter } from "react-router-dom";
import {QuirkFormInput} from './quirk_form_input';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from '@fortawesome/fontawesome-free-solid'
import StarRatings from 'react-star-ratings';

const QuirkForm = ({
  update,
  title, 
  body,
  apt_number,
  handleAddQuirk,
  handleHideQuirkForm,
  apartmentShow
}) => {

  const [starRating, setStarRating] = useState();
  const [neighborhoodStarRating, setNeighborhoodStarRating] = useState();
  const [landlordStarRating, setLandlordStarRating] = useState();
  const [noiseStarRating, setNoiseStarRating] = useState();
  const [onFirstPage, setOnFirstPage] = useState(true);

  const handleClickSecondPage = () => setOnFirstPage(false);

  const handleChangeRating = rating => setStarRating(rating);

  const handleChangeNeighborhoodStarRating = rating => setNeighborhoodStarRating(rating);

  const handleChangeNoiseStarRating = rating => setNoiseStarRating(rating);

  const handleChangeLandLordStarRating = rating => setLandlordStarRating(rating);

  return (
    <div className="QuirkForm">
    <FontAwesomeIcon 
      className="QuirkForm-closeFormIcon"
      size="2x" 
      icon={faTimesCircle} 
      onClick={handleHideQuirkForm}
    />
    <div className="QuirkForm-titleSectionWrapper">
      <h1 className="QuirkForm-title">Add Quirk</h1>
      <p>{apartmentShow.street_address}</p>
    </div>
    {onFirstPage ? (
      <div className="QuirkForm-inputsWrapper">
        <QuirkFormInput 
          name="title"
          title="Review Title"
          update={update}
          isValid={title.length >= 6}
          value={title}
        />
        <QuirkFormInput 
          name="body"
          title="Any advice to other future tenants?*"
          isTextArea
          update={update}
          isValid={body.length >= 15}
          value={body}
        />
        <QuirkFormInput 
          name="apt_number"
          title="Apartment Number (Optional)"
          update={update}
          isValid={apt_number.length >= 1}
          value={apt_number}
        />
      <button 
        className="QuirkForm-button form-button"
        onClick={handleClickSecondPage}>
        Next
      </button>
      </div>
    ) : (
      <>
        <div className="QuirkForm-starRating">
          <p className="QuirkForm-ratingTitle">Overall Rating</p>
          <StarRatings 
            rating={starRating}
            starRatedColor="#192841"
            numberOfStars={5}
            starDimension="28px"
            starSpacing="3px"
            name="Overall Rating"
            changeRating={handleChangeRating}
            starHoverColor="#FDCC0D"
          />
        </div>
        <div className="QuirkForm-starRating">
        <p className="QuirkForm-ratingTitle">Noise Rating</p>
          <StarRatings 
            rating={noiseStarRating}
            starRatedColor="#192841"
            numberOfStars={5}
            starDimension="28px"
            starSpacing="3px"
            name="Noise Levels"
            changeRating={handleChangeNoiseStarRating}
            starHoverColor="#FDCC0D"
          />
        </div>
        <div className="QuirkForm-starRating">
        <p className="QuirkForm-ratingTitle">Neighborhood Rating</p>
          <StarRatings 
            rating={neighborhoodStarRating}
            starRatedColor="#192841"
            numberOfStars={5}
            starDimension="28px"
            starSpacing="3px"
            name="Neighborhood"
            changeRating={handleChangeNeighborhoodStarRating}
            starHoverColor="#FDCC0D"
          />
        </div>
        <div className="QuirkForm-starRating">
        <p className="QuirkForm-ratingTitle">Landlord Rating</p>
          <StarRatings 
            rating={landlordStarRating}
            starRatedColor="#192841"
            numberOfStars={5}
            starDimension="28px"
            starSpacing="3px"
            name="Landlor/Property Management"
            changeRating={handleChangeLandLordStarRating}
            starHoverColor="#FDCC0D"
          />
        </div>
      <button 
        className="QuirkForm-button form-button"
        onClick={() => handleAddQuirk(
          title, 
          body, 
          apt_number, 
          starRating, 
          neighborhoodStarRating, 
          landlordStarRating, 
          noiseStarRating
        )}>
        Submit
      </button>
      </>
    )}
  </div>
  )
}


export default withRouter(QuirkForm);
