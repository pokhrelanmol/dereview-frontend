import React, { useState } from "react";

import ReactStars from "react-rating-stars-component";
const CurriculumStarRating = () => {
  const [curriculamRating, setCurriculumRating] = useState<number>();
  const CurriculumStarRatingChanged = (newRating: number) => {
    setCurriculumRating(newRating);
  };
  return (
    <>
      <ReactStars
        count={5}
        onChange={CurriculumStarRatingChanged}
        size={24}
        activeColor="#ffd700"
        emptyIcon={<i className="far fa-star"></i>}
        fullIcon={<i className="fa fa-star"></i>}
      />
    </>
  );
};

export default CurriculumStarRating;
