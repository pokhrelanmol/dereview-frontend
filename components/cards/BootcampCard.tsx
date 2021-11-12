import { StarIcon } from "@heroicons/react/solid";
import uniqId from "uniqid";
type BootcampCardPropsType = {
  name: string;
  mode: string;
  stars: number;
  subjects: string;
};
const BootcampCard = ({
  name,
  mode,
  stars,
  subjects,
}: BootcampCardPropsType) => {
  return (
    <div className="bg-gray-50 shadow-md border border-gray-600 h-30 w-54 space-y-2 m-4 cursor-pointer flex flex-col items-center p-10 rounded-md">
      <img
        src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/2022/original.png?1630021827"
        alt="name"
        className="h-16 w-16"
      />
      <a className="text-md font-semibold tracking-wide text-blue-800 hover:underline">
        {name}
      </a>
      <p className="flex space-x-1 text-yellow-400">
        {Array(Math.round(4.6))
          .fill(1)
          .map((_, i) => (
            <StarIcon key={uniqId()} className="h-5" />
          ))}
      </p>
      <p className=" font-extralight text-black leading-4 text-sm">
        {subjects}
      </p>
      <p className="font-light">{mode}</p>
    </div>
  );
};

export default BootcampCard;
