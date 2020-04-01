import React from "react";
import Image from "react";

const ApartmentIndexItem = ({ apartment, redirect }) => {
  let streetAddress = "";
  let cityStateZip = "";
  if (apartment.street_address) {
    streetAddress = apartment.street_address.split(",")[0];
    cityStateZip = [
      apartment.street_address.split(",")[1],
      apartment.street_address.split(",")[2],
    ].join(",");
  }

  return (
    <li
      className="FeaturedApartmentsItem"
      onClick={() => redirect(apartment.id)}
    >
      <div className="FeaturedApartmentsItem-addressWrapper">
        <h1 className="FeaturedApartmentsItem-streetAddress">
          {streetAddress}
        </h1>
        <h3 className="FeaturedApartmentsItem-cityStateZip">{cityStateZip}</h3>
      </div>
    </li>
  );
};

export default ApartmentIndexItem;
