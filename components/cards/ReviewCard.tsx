import uniqId from "uniqid";
import { StarIcon } from "@heroicons/react/solid";
import ReviewDetails from "../ReviewDescription";
import ReviewDescription from "../ReviewDescription";
type ReviewCardPropsType = {
  name: string;
  completedDate: string;
  reviewDate: string;
  overallStar: number;
  curriculamStar: number;
  jobsupportStar: number;
  inShortReview: string;
  description: string;
};
const ReviewCard = ({
  name,
  completedDate,
  reviewDate,
  overallStar,
  curriculamStar,
  jobsupportStar,
  inShortReview,
  description,
}: ReviewCardPropsType) => {
  return (
    <div className="bg-gray-50 p-5 space-y-5 shadow-lg">
      <div className="mb-4 border-b border-gray-200">
        <div className="flex justify-between ">
          <h1 className="font-semibold  text-gray-800">{name}</h1>
          <p className="font-light ">
            date :<span>{completedDate}</span>
          </p>
        </div>
        <p>
          completed: <span className="font-light text-sm">{reviewDate}</span>
        </p>
      </div>
      <div className="flex justify-between border-b border-gray-200">
        <p>
          <h3>Overall</h3>
          <p className="flex  text-yellow-400">
            {Array(Math.round(overallStar))
              .fill(1)
              .map((_, i) => (
                <StarIcon key={uniqId()} className="h-3" />
              ))}
          </p>
        </p>
        <p>
          <h3>Curriculum</h3>
          <p className="flex  text-yellow-400">
            {Array(Math.round(curriculamStar))
              .fill(1)
              .map((_, i) => (
                <StarIcon key={uniqId()} className="h-3" />
              ))}
          </p>
        </p>
        <p>
          <h3>Job Support</h3>
          <p className="flex  text-yellow-400">
            {Array(Math.round(jobsupportStar))
              .fill(1)
              .map((_, i) => (
                <StarIcon key={uniqId()} className="h-3" />
              ))}
          </p>
        </p>
      </div>
      <h2 className="font-semibold text-lg text-gray-800">{inShortReview}</h2>
      <ReviewDescription reviewDescription={description} />
    </div>
  );
};

export default ReviewCard;
