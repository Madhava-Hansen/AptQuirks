import React from "react";
import StarRatings from 'react-star-ratings';

const ApartmentIndexItem = ({ apartment, redirect, index }) => {
  let streetAddress = "";
  let cityStateZip = "";
  if (apartment.street_address) {
    streetAddress = apartment.street_address.split(",")[0];
    cityStateZip = [
      apartment.street_address.split(",")[1],
      apartment.street_address.split(",")[2],
    ].join(",");
  }
  const featuredQuirk = apartment && apartment.quirks ? apartment.quirks[0] : {};
  const starRatingColor = "#FDCC0D";

  return (
    <li
      className='FeaturedApartmentsItem'
      onClick={() => redirect(apartment.id)}
    >
      <div className="FeaturedApartmentsItem-mainWrapper">
        <section className="FeaturedApartmentsItem-userInfo">
          <img className="FeaturedApartmentsItem-userPic" src={featuredQuirk.user_pic}></img>
          <p className="FeaturedApartmentsItem-username">{featuredQuirk.user_name}</p>
        </section>
        <h4 className="FeaturedApartmentsItem-titleText">{featuredQuirk.title}</h4>
        <p className="FeaturedApartmentsItem-bodyText">{featuredQuirk.body}</p>
        {!!featuredQuirk.star_rating && (
          <div className="FeaturedApartmentsItem-starRating">
            <StarRatings 
              rating={featuredQuirk.star_rating}
              starRatedColor={starRatingColor}
              numberOfStars={5}
              starDimension="35px"
              starSpacing="5px"
              name="Overall Rating"
            />
          </div>
        )}
        <div className="FeaturedApartmentsItem-addressWrapper">
          <h1 className="FeaturedApartmentsItem-streetAddress">
            {`${streetAddress.slice(0, 14)} ${streetAddress.length >= 14 ? '...' : ''}`}
          </h1>
          <h3 className="FeaturedApartmentsItem-cityStateZip">{cityStateZip}</h3>
        </div>
      </div>
    </li>
  );
};

export default ApartmentIndexItem;
