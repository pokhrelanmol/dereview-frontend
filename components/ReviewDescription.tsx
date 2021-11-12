import { useEffect, useState } from "react";
type ReviewDescriptionType = {
  reviewDescription: string;
};
const ReviewDescription = ({ reviewDescription }: ReviewDescriptionType) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <p>
        {isReadMore ? reviewDescription.slice(0, 150) : reviewDescription}
        <a
          className="text-blue-600 cursor-pointer hover:underline"
          onClick={toggleReadMore}
        >
          {isReadMore ? "...read more" : " show less"}
        </a>
      </p>
    </div>
  );
};

export default ReviewDescription;
