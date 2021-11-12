import CurriculumStarRating from "./starRatings/CurriculumStarRating";
import JobSupportStarRating from "./starRatings/JobSupportStarRating";
import OverallStarRating from "./starRatings/OverallStarRating";

const ReviewForm = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-lg text-center p-10 bg-gray-100 ">
        {" "}
        <span className="text-xl text-gray-700 font-bold">
          Your review matters!
        </span>{" "}
        Honest feedback of your tech bootcamp experience will help guide future
        students. Plus, your review can be 100% anonymous.
      </h1>
      <div className="mt-10 bg-gray-100 p-10">
        <div className="flex  gap-4 ">
          <div>
            <label htmlFor="j"> Full Name</label>
            <input
              type="text"
              className="inputField"
              placeholder="Enter full name"
            />
          </div>
          <div>
            <label htmlFor="j"> Email</label>
            <input
              type="email"
              className="inputField"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <label htmlFor="j"> Profession</label>
            <input
              type="text"
              className="inputField"
              placeholder="e.g Software Engineer,Designer etc"
            />
          </div>
        </div>
        <div className="mt-5 ">
          <label htmlFor="">Review Title</label>
          <input
            className="inputField w-full"
            type="text"
            placeholder="In one sentense, describe your experience"
          />
        </div>
        <div className="my-5">
          <label htmlFor="" className="block float-left ">
            Review
          </label>
          <br />
          <p className="font-extralight text-sm">
            We reserve the right to remove content that violates our{" "}
            <a className="text-blue-800 text-base font-normal" href="#">
              guideline
            </a>
            . Reviews should not contain profanity, hate speech, identifying
            factors, or personal information.
          </p>
          <br />
          <textarea
            cols="80"
            rows="10"
            className="p-5"
            placeholder="What are the pros and cons of attending this bootcap? Share your story"
          ></textarea>
        </div>
        <div>
          <h1 className="pb-4">How do you rate your expierence</h1>
          <div className="flex justify-between">
            <div className="flex justify-center items-center py-4 px-5 bg-white">
              OVERALL:
              <OverallStarRating />
            </div>
            <div className="flex justify-center items-center py-4 px-5 bg-white">
              CURRICULUM:
              <CurriculumStarRating />
            </div>
            <div className="flex justify-center items-center py-4 px-5 bg-white">
              JOB SUPPORT:
              <JobSupportStarRating />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
