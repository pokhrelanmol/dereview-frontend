import router from "next/router";

type CoursesCardPropsType = {
  name: string;
  duration: string;
  price: string;
};
const CoursesCard = ({ name, duration, price }: CoursesCardPropsType) => {
  return (
    <div
      onClick={() => router.push("/CourseDetailsPage")}
      className="grid grid-cols-3 mb-10 bg-gray-100 rounded-sm  p-7"
    >
      <p>
        Name:
        <span className="text-md font-light text-gray-800 ml-2">{name}</span>
      </p>
      <p>
        Duration:{" "}
        <span className="text-md font-light text-gray-800 ml-2">
          {duration}
        </span>
      </p>
      <p>
        Price:{" "}
        <span className="text-md font-light text-gray-800 ml-2">{price}</span>
      </p>
    </div>
  );
};

export default CoursesCard;
