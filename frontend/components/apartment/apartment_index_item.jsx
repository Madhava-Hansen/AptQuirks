import React from 'react';
import Image from 'react';

const ApartmentIndexItem = ({ apartment, redirect }) => {
  let streetAddress = "";
  let cityStateZip = "";
  let classes = "apartment-index-item"
  if (apartment.street_address) {
    streetAddress = apartment.street_address.split(",")[0];
    cityStateZip = [apartment.street_address.split(",")[1],
    apartment.street_address.split(",")[2]].join(",");
  }

  return (
    <li className={classes}
      onClick={ () => redirect(apartment.id) }>
      <div className="apt-index-text-container">
        <h1 className="street-address-index">{streetAddress}</h1>
        <h3 className="city-state-zip-index">{cityStateZip}</h3>
      </div>
    </li>
  )
}

export default ApartmentIndexItem;
