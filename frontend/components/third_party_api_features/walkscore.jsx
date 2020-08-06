import React, {useState, useEffect} from 'react';

export const Walkscore = ({data}) => {

  const [walkscoreData, setWalkscoreData] = useState({});

  useEffect(() => {
    {data && data.third_party_ap_is.street_address && (
      $.ajax({
        method: 'GET',
        url: '/third_party_apis',
        data: data
      }).then(response => {
        setWalkscoreData(respone);
      })
    )}
  }, [data])

  return (
    <div>Walk Score Data</div>
  )
}