import React, { useState } from "react";

import ReactStars from "react-rating-stars-component";

const JobSupportStarRating = () => {
  const [jobSupportRating, setJobSupportRating] = useState<number>();
  const jobSupportRatingChanged = (newRating: number) => {
    setJobSupportRating(newRating);
  };
  return (
    <>
      <ReactStars
        count={5}
        onChange={jobSupportRatingChanged}
        size={24}
        activeColor="#ffd700"
        emptyIcon={<i className="far fa-star"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
    </>
  );
};

export default JobSupportStarRating;
