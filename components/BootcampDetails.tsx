import { LocationMarkerIcon } from "@heroicons/react/outline";
import {
  StarIcon,
  AnnotationIcon,
  ShieldCheckIcon,
} from "@heroicons/react/solid";
import uniqId from "uniqid";
import Image from "next/dist/client/image";
import CoursesCard from "./cards/CoursesCard";
import ReviewCard from "./cards/ReviewCard";
import router from "next/router";
const demoCourses = [
  {
    name: "Machine Laerning",
    duration: "12 weeks",
    price: "100$",
  },
  {
    name: "Machine Laerning",
    duration: "12 weeks",
    price: "100$",
  },
  {
    name: "Machine Laerning",
    duration: "12 weeks",
    price: "100$",
  },
  {
    name: "Machine Laerning",
    duration: "12 weeks",
    price: "100$",
  },
];
const DemoReviews = [
  {
    name: "Chiran Poudyal",
    completedDate: "12/11/2021",
    reviewDate: "13/11/2021",
    overallStar: 4,
    curriculamStar: 5,
    jobsupportStar: 4.2,
    inShortReview: '"Intense & tremendously difficult, but worth it."',
    description:
      "I come from a background in many different areas. The most recent being ministry. I had a 4 year degree in math and about a year of self-taught experience as I was beginning the Louisville Software Guild .NET/C# Bootcamp. I quickly exhausted all that I learned in my year of self-teaching within the first 3 weeks of the bootcamp. Not only did I learn how to code, but I also learned other concepts that are extremely important if you want to break into the field. Concepts like OOP, how to write clean code, testing, data structuring, MVC, and others. Between in-class work and home-work I put in, on average, 70 hours a week for the duration of the 12 weeks. I also drove an hour one way everyday to attend the in person bootcamp. I say that just in case someone else is thinking about taking the plunge but doesn't live in Louisville. It was difficult, but definitely doable. After the Guild it only took 2 weeks to be hired by a company in Louisville.",
  },
  {
    name: "Chiran Poudyal",
    completedDate: "12/11/2021",
    reviewDate: "13/11/2021",
    overallStar: 4,
    curriculamStar: 5,
    jobsupportStar: 4.2,
    inShortReview: '"Intense & tremendously difficult, but worth it."',
    description:
      "I come from a background in many different areas. The most recent being ministry. I had a 4 year degree in math and about a year of self-taught experience as I was beginning the Louisville Software Guild .NET/C# Bootcamp. I quickly exhausted all that I learned in my year of self-teaching within the first 3 weeks of the bootcamp. Not only did I learn how to code, but I also learned other concepts that are extremely important if you want to break into the field. Concepts like OOP, how to write clean code, testing, data structuring, MVC, and others. Between in-class work and home-work I put in, on average, 70 hours a week for the duration of the 12 weeks. I also drove an hour one way everyday to attend the in person bootcamp. I say that just in case someone else is thinking about taking the plunge but doesn't live in Louisville. It was difficult, but definitely doable. After the Guild it only took 2 weeks to be hired by a company in Louisville.",
  },
  {
    name: "Chiran Poudyal",
    completedDate: "12/11/2021",
    reviewDate: "13/11/2021",
    overallStar: 4,
    curriculamStar: 5,
    jobsupportStar: 4.2,
    inShortReview: '"Intense & tremendously difficult, but worth it."',
    description:
      "I come from a background in many different areas. The most recent being ministry. I had a 4 year degree in math and about a year of self-taught experience as I was beginning the Louisville Software Guild .NET/C# Bootcamp. I quickly exhausted all that I learned in my year of self-teaching within the first 3 weeks of the bootcamp. Not only did I learn how to code, but I also learned other concepts that are extremely important if you want to break into the field. Concepts like OOP, how to write clean code, testing, data structuring, MVC, and others. Between in-class work and home-work I put in, on average, 70 hours a week for the duration of the 12 weeks. I also drove an hour one way everyday to attend the in person bootcamp. I say that just in case someone else is thinking about taking the plunge but doesn't live in Louisville. It was difficult, but definitely doable. After the Guild it only took 2 weeks to be hired by a company in Louisville.",
  },
  {
    name: "Chiran Poudyal",
    completedDate: "12/11/2021",
    reviewDate: "13/11/2021",
    overallStar: 4,
    curriculamStar: 5,
    jobsupportStar: 4.2,
    inShortReview: '"Intense & tremendously difficult, but worth it."',
    description:
      "I come from a background in many different areas. The most recent being ministry. I had a 4 year degree in math and about a year of self-taught experience as I was beginning the Louisville Software Guild .NET/C# Bootcamp. I quickly exhausted all that I learned in my year of self-teaching within the first 3 weeks of the bootcamp. Not only did I learn how to code, but I also learned other concepts that are extremely important if you want to break into the field. Concepts like OOP, how to write clean code, testing, data structuring, MVC, and others. Between in-class work and home-work I put in, on average, 70 hours a week for the duration of the 12 weeks. I also drove an hour one way everyday to attend the in person bootcamp. I say that just in case someone else is thinking about taking the plunge but doesn't live in Louisville. It was difficult, but definitely doable. After the Guild it only took 2 weeks to be hired by a company in Louisville.",
  },
];
const BootcampDetails = () => {
  const handleWriteReview = () => {
    router.push("/reviewFormPage");
  };
  return (
    <>
      {/* first section */}
      <section className="bg-gray-200 py-5 shadow-md ">
        <div className=" max-w-4xl mx-auto bg-white rounded-lg p-10">
          <div className="flex justify-around items-center">
            <Image src="/images/Logo.png" width={150} height={150} />
            <div>
              <h1 className="font-bold text-4xl text-gray-600 pb-3 ">
                The Software Guild
              </h1>
              <p className="flex text-sm">
                <LocationMarkerIcon className="h-6" />
                online
              </p>
            </div>
          </div>

          <div className="flex justify-around items-center">
            <button
              onClick={handleWriteReview}
              className="py-4 px-7 border border-red-600 rounded-md shadow-md bg-gray-200 text-red-600 font-semibold hover:bg-white focus:bg-red-100 "
            >
              Write a Review
            </button>
            <p className="flex space-x-1 text-yellow-400">
              {Array(Math.round(4.6))
                .fill(1)
                .map((_, i) => (
                  <StarIcon key={uniqId()} className="h-5" />
                ))}
            </p>
            <div className="flex items-center">
              <AnnotationIcon className="h-5" />
              <p className="text-sm">102 reviews</p>
            </div>
          </div>
        </div>
      </section>
      {/* second section */}
      <section>
        <div className="max-w-5xl mx-auto p-10">
          <h1 className="heading">About The Software Guild</h1>
          <div className="flex justify-between">
            <div className="flex space-x-3">
              <LocationMarkerIcon className="h-5" />
              <p>
                <span>Location:</span>
                <span>Online</span>
              </p>
            </div>
            <div className="flex  space-x-3">
              <div className="flex space-x-2">
                <ShieldCheckIcon className="h-5 text-red-600" />
                <p>Available Online</p>
              </div>
              <div className="flex space-x-2">
                <ShieldCheckIcon className="h-5 text-red-600" />
                <p>Flexible Classes</p>
              </div>
            </div>
          </div>
          {/* content box */}
          <div className="p-5 mt-10 bg-gray-50 rounded-md shadow-md">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
              iste! Illum, nihil adipisci dolorem repellat reprehenderit facilis
              nemo nesciunt dolorum laborum fugit blanditiis est libero, maiores
              esse temporibus quia! Quod ipsam quisquam quas quo debitis nostrum
              excepturi dignissimos reprehenderit voluptatem consequuntur.
              Optio, ipsam officia placeat, deserunt sunt aliquid ea repellat
              fugit modi magnam beatae quam unde, quibusdam tempora tempore
              eligendi nemo excepturi aliquam. Accusantium sed sit illum quos,
              ratione dolorem qui assumenda soluta impedit facere dignissimos
              reiciendis porro magni nobis quam consectetur sint molestiae iure
              id labore repellat. Voluptatum eligendi non minima nesciunt ullam
              consequatur ratione voluptas quis similique aliquam.
            </p>
          </div>
          {/* courses */}
          <div className="p-5 bg-gray-50 ">
            <h1 className="heading">Couses Offers</h1>
            {demoCourses.map(({ name, price, duration }) => (
              <CoursesCard
                key={uniqId()}
                name={name}
                price={price}
                duration={duration}
              />
            ))}
          </div>
          {/* reviews */}
          <section className="max-w-5xl mx-auto py-10  ">
            <h1 className="heading">Students Reviews</h1>
            <div className=" grid grid-cols-2 gap-5 ">
              {DemoReviews.map(
                ({
                  name,
                  completedDate,
                  reviewDate,
                  overallStar,
                  curriculamStar,
                  jobsupportStar,
                  inShortReview,
                  description,
                }) => (
                  <ReviewCard
                    key={uniqId()}
                    name={name}
                    completedDate={completedDate}
                    reviewDate={reviewDate}
                    overallStar={overallStar}
                    curriculamStar={curriculamStar}
                    jobsupportStar={jobsupportStar}
                    inShortReview={inShortReview}
                    description={description}
                  />
                )
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default BootcampDetails;
