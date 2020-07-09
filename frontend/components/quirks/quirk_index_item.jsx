import React, {useState, useEffect} from "react";
import StarRatings from 'react-star-ratings';
import {QuirkFormInput} from './quirk_form_input';
import {updateQuirk} from '../../util/quirk_api_util';

export const QuirkIndexItem = ({
  quirk: { 
    id, 
    user_name, 
    user_pic, 
    user_id, 
    title, 
    apt_number, 
    body, 
    created_at, 
    star_rating,
    neighborhood_star_rating,
    landlord_star_rating,
    noise_star_rating
  },
  currentUser,
  apartmentId
}) => {
  const [enableEditMode, setEnableEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState();
  const [editBody, setEditBody] = useState();
  const [aptNumber, setAptNumber] = useState();
  const [starRating, setStarRating] = useState();
  const [neighborhoodStarRating, setNeighborhoodStarRating] = useState();
  const [landlordStarRating, setLandlordStarRating] = useState();
  const [noiseStarRating, setNoiseStarRating] = useState();
  const handleToggleEditMode = () => {
    const nextEditMode = !enableEditMode;
    setEnableEditMode(nextEditMode);
  };

  const handleUpdateQuirk = () => {
    const userId = currentUser && currentUser.id;
    const quirk = {quirk: {
      user_id: userId, 
      id: id, 
      title: editTitle, 
      body: editBody, 
      apt_number: aptNumber, 
      star_rating: starRating,
      neighborhood_star_rating: neighborhoodStarRating,
      landlord_star_rating: landlordStarRating,
      noise_star_rating: noiseStarRating
    }};
    updateQuirk(quirk, apartmentId).then(() => {
      setEnableEditMode(false);
    })
  }
  const handleChangeRating = rating => setStarRating(rating);

  const handleChangeNeighborhoodStarRating = rating => setNeighborhoodStarRating(rating);

  const handleChangeNoiseStarRating = rating => setNoiseStarRating(rating);

  const handleChangeLandLordStarRating = rating => setLandlordStarRating(rating);

  const update = type => e => {
    switch (type) {
      case 'title':
        setEditTitle(e.target.value);
        break;
      case 'body': 
        setEditBody(e.target.value);
        break;
      case 'apt_number':
        setAptNumber(e.target.value);
        break;
      default:
        return;
    }
  }; 

  useEffect(() => {
    setEditBody(body);
    setEditTitle(title);
    setAptNumber(apt_number);
    setStarRating(star_rating || 0);
    setNeighborhoodStarRating(neighborhood_star_rating || 0);
    setLandlordStarRating(landlord_star_rating || 0);
    setNoiseStarRating(noise_star_rating || 0);
  }, [])

  return (
    <li className="QuirkIndexItem">
      {(currentUser && currentUser.id === user_id) && (
        <div onClick={handleToggleEditMode} className="QuirkIndexItem-editIcon"> 
        {enableEditMode ? (
          <p onClick={handleUpdateQuirk} className="QuirkIndexItem-saveButton">save</p> 
        ) : (
          <p className="QuirkIndexItem-saveButton">edit</p>
        )}
        </div>
      )} 
      {!enableEditMode && (
        <section className="QuirkIndexItem-userInfo">
          <img className="QuirkIndexItem-userPic" src={user_pic}></img>
          <p className="QuirkIndexItem-username">{user_name}</p>
          <p className="QuirkIndexItem-timestamp">{created_at} ago</p>
        </section>
      )}
        {enableEditMode ? (
          <div className="QuirkIndexItem-editModeContent">
            <QuirkFormInput 
              name="title"
              placeholder="title..."
              update={update}
              isValid={editTitle.length >= 6}
              value={editTitle}
            />
            <QuirkFormInput 
              name="body"
              placeholder="body..."
              isTextArea
              update={update}
              isValid={editBody.length >= 15}
              value={editBody}
            />
            <QuirkFormInput 
              name="apt_number"
              placeholder="apt..."
              update={update}
              isValid={apt_number.length >= 1}
              value={aptNumber}
            />
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
          </div>
        ) : (
        <section className="QuirkIndexItem-mainContent">
          {(editTitle && editTitle !== 'empty') && (
            <h4 className="QuirkIndexItem-titleText">{editTitle}</h4>
          )}
          {aptNumber && (
            <p className="QuirkIndexItem-apartmentNumber">Apt {aptNumber}</p>
          )}
          <p className="QuirkIndexItem-bodyText">{editBody}</p>
          {!!starRating && (
            <div className="QuirkIndexItem-starRating">
              <StarRatings 
                rating={starRating}
                starRatedColor="#192841"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="3px"
                name="Overall Rating"
              />
            </div>
          )}
      </section>
      )}
    </li>
  );
};
