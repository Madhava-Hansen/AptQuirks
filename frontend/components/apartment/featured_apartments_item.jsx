import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faUniversity, faHome, faChessRook} from '@fortawesome/fontawesome-free-solid'

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
  const getDdditionalClass = index => {
    switch (index) {
      case 0: 
        return 'FeaturedApartmentsItem-lightMode'
      case 1: 
        return 'FeaturedApartmentsItem-darkMode'
      case 2:  
        return 'FeaturedApartmentsItem-darkMode'
      case 3:
        return 'FeaturedApartmentsItem-lightMode'
    }
  }

  const icons = [faChessRook, faHome, faUniversity, faBuilding];

  return (
    <li
      className={`FeaturedApartmentsItem ${getDdditionalClass(index)}`}
      onClick={() => redirect(apartment.id)}
    >
      <FontAwesomeIcon
        size="6x" 
        icon={icons[index]}
        className="FeaturedApartmentsItem-icon"
      />
      <div className="FeaturedApartmentsItem-addressWrapper">
        <h1 className="FeaturedApartmentsItem-streetAddress">
          {`${streetAddress.slice(0, 14)} ${streetAddress.length >= 14 ? '...' : ''}`}
        </h1>
        <h3 className="FeaturedApartmentsItem-cityStateZip">{cityStateZip}</h3>
      </div>
    </li>
  );
};

export default ApartmentIndexItem;
