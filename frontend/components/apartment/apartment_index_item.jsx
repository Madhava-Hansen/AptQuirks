import React from 'react';

const ApartmentIndexItem = ({ apartment, redirect }) => {
  return (
    <li onClick={ () => redirect(apartment.id) }>
      {apartment.street_address}
    </li>
  )
}

export default ApartmentIndexItem;
