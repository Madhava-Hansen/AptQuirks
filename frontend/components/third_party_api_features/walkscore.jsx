import React, {useState, useEffect} from 'react';

export const Walkscore = ({data}) => {

  const [walkscoreData, setWalkscoreData] = useState({});

  const getWalkscoreData = () => {
    return $.ajax({
      method: 'GET',
      url: '/third_party_apis',
      data: data
    })
  }

  useEffect(() => {
    {data && data.third_party_ap_is.address && (
      getWalkscoreData(data).then(response => {
        setWalkscoreData(response);
      })
    )}
  }, [data])

  return (
      <>
        {walkscoreData && (
          <div className="Walkscore">
            <img className="Walkscore-logo" src={walkscoreData.logo_url}></img>
            <div className="Walkscore-scoreWrapper">
              <div className="Walkscore-badgeWrapper">
                <img className="Walkscore-badge" src={`//pp.walk.sc/badge/walk/score/${walkscoreData.walkscore}.svg`}></img>
                <h3 className="Walkscore-badgeDescription">{walkscoreData.description}</h3>
              </div>
              {walkscoreData.transit && (
                <div className="Walkscore-badgeWrapper">
                  <img className="Walkscore-badge" src={`//pp.walk.sc/badge/transit/score/${walkscoreData.transit.score}.svg`} />
                  <p className="Walkscore-badgeDescription">{walkscoreData.transit.description}</p>
                </div>
              )}
              {walkscoreData.bike && (
                <div className="Walkscore-badgeWrapper">
                  <img className="Walkscore-badge" src={`//pp.walk.sc/badge/bike/score/${walkscoreData.bike.score}.svg`} />
                  <p className="Walkscore-badgeDescription">{walkscoreData.bike.description}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </>
   )
}