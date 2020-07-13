import React, {useState, useEffect} from 'react';
import StarRatings from 'react-star-ratings';

export const QuirkReviewStarsAverages = ({quirks}) => {
    const starRatingColor = "#FDCC0D";

    const [averateStarRating, setAverageStarRating] = useState();
    const [averateLandlordStarRating, setAverageLandlordStarRating] = useState();
    const [averateNoiseStarRating, setAverageNoiseStarRating] = useState();
    const [averateNeighborhoodStarRating, setAverageNeighborhoodStarRating] = useState();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      getReviewTotals(quirks);
    }, [quirks])

    const getReviewTotals = quirks => {
      const starRating = {count: 0, total: 0};
      const landlordRating = {count: 0, total: 0};
      const noiseRating = {count: 0, total: 0};
      const neighborhoodRating = {count: 0, total: 0};
      quirks.forEach(quirk => {
        if (quirk.star_rating) {
          starRating.count += 1;
          starRating.total += quirk.star_rating;
        }
        if (quirk.noise_star_rating) {
          noiseRating.count += 1;
          noiseRating.total += quirk.noise_star_rating;
        }
        if (quirk.landlord_star_rating) {
          landlordRating.count += 1;
          landlordRating.total += quirk.landlord_star_rating;
        }
        if (quirk.neighborhood_star_rating) {
          neighborhoodRating.count += 1;
          neighborhoodRating.total += quirk.neighborhood_star_rating;
        }
        setAverageStarRating(starRating.total / starRating.count);
        setAverageLandlordStarRating(landlordRating.total / landlordRating.count);
        setAverageNeighborhoodStarRating(neighborhoodRating.total / neighborhoodRating.count);
        setAverageNoiseStarRating(noiseRating.total / noiseRating.count);
      })
    }

    const toggleIsOpen = () => {
      const nextState = !isOpen;
      setIsOpen(nextState);
    }

    return (
    <div className={`QuirkReviewStarsFeature ${isOpen ? 'QuirkReviewStarsFeature--isOPen' : ''}`}>
      <div className="QuirkForm-starRating">
        <p className="QuirkForm-ratingTitle">Overall Rating</p>
        <StarRatings 
          rating={averateStarRating || 0}
          starRatedColor={starRatingColor}
          numberOfStars={5}
          starDimension={isOpen ? "28px" : "36px"}
          starSpacing="3px"
          name="Overall Rating"
        />
      </div>
      <div className={isOpen ? `QuirkReviewStarsFeature-revealStarRatings` : 'QuirkReviewStarsFeature-hideStarRatings'}>
      <div className="QuirkForm-starRating">
      <p className="QuirkForm-ratingTitle">Noise Rating</p>
        <StarRatings 
          rating={averateNoiseStarRating || 0}
          starRatedColor={starRatingColor}
          numberOfStars={5}
          starDimension="28px"
          starSpacing="3px"
          name="Noise Levels"
        />
      </div>
      <div className="QuirkForm-starRating">
      <p className="QuirkForm-ratingTitle">Neighborhood Rating</p>
        <StarRatings 
          rating={averateNeighborhoodStarRating || 0}
          starRatedColor={starRatingColor}
          numberOfStars={5}
          starDimension="28px"
          starSpacing="3px"
          name="Neighborhood"
        />
      </div>
      <div className="QuirkForm-starRating">
      <p className="QuirkForm-ratingTitle">Landlord Rating</p>
        <StarRatings 
          rating={averateLandlordStarRating || 0}
          starRatedColor={starRatingColor}
          numberOfStars={5}
          starDimension="28px"
          starSpacing="3px"
          name="Landlor/Property Management"
        />
      </div>
      </div>
      <a className="QuirkReviewStarsFeature-moreLink" onClick={toggleIsOpen}>{isOpen ? 'less' : 'more'}</a>
    </div>
    )
}