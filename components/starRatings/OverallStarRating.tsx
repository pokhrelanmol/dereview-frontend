import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const StarRating = () => {
  const [overallRating, setOverallRating] = useState<number>();
  const overallRatingChanged = (newRating: number) => {
    setOverallRating(newRating);
  };
  return (
    <>
      <ReactStars
        count={5}
        onChange={overallRatingChanged}
        size={24}
        activeColor="#ffd700"
        emptyIcon={<i className="far fa-star"></i>}
        fullIcon={<i className="fa fa-star"></i>}
      />
    </>
  );
};

export default StarRating;
