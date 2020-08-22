import React, { useEffect } from "react";

export const AboutPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="AboutPage">
      <div className="AboutPage-mainContent">
        <h1 className="AboutPage-headingText">
          The Original Apartment Review Site
        </h1>
        <h3 className="AboutPage-subHeading">Founded 2017</h3>
        <p className="AboutPage-body">
          Landlords ask a lot from renters when they are screening potential
          tenants but tenants are left completely in the dark. Apartment Quirks
          was created to empower people with knowledge about landlords,
          apartments, neighborhoods and everything else relating to hunting for
          an apartment. Our goal is to help people get to know an apartment
          before they sign a lease. On Apartment Quirks, people can share their
          experiences about living in apartments, rate their landlords, rate
          their neighborhoods, rate their building and talk about anything else
          that could be an issue with an apartment. This insider information is
          the meat and potatoes of what makes Apartment Quirks so powerful for
          renters. It reduces the anxiety, the unknown, the worry that comes
          along with commiting to an apartment for a whole year without really
          knowing what you're getting yourself into. Does the shower temperature
          change suddenly, are there bug or rodent problems in the building, are
          the neighbors noisy, is the super unhelpful? Don’t rent blindly, get
          to know your next apartment, before you sign a lease.
        </p>
      </div>
    </div>
  );
};
