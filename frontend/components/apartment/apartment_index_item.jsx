import React from 'react';

const ApartmentIndexItem = ({ apartment, redirect }) => {
  let streetAddress = "";
  let cityStateZip = "";
  if (apartment.street_address) {
    streetAddress = apartment.street_address.split(",")[0];
    cityStateZip = [apartment.street_address.split(",")[1],
    apartment.street_address.split(",")[2]].join(",");
  }

  return (
    <li className="apartment-index-item"
      onClick={ () => redirect(apartment.id) }>
      <h1 className="street-address-index">{streetAddress}</h1>
      <h3 className="city-state-zip-index">{cityStateZip}</h3>
      <img src="http://res.cloudinary.com/aptquirks/image/upload/v1497654268/fepioyozfto35nvgwsnw.jpg"
      className='apartment-index-image' alt="apartment image"></img>
    </li>
  )
}

export default ApartmentIndexItem;
