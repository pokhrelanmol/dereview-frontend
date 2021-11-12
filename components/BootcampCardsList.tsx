import BootcampCard from "./cards/BootcampCard";

import uniqId from "uniqid";
const demoBootcamps = [
  {
    name: "chainsort",
    stars: 4,
    mode: "online",
    subjects: "Data science,Web Development,Smart Contracts ",
  },
  {
    name: "chainsort",
    stars: 4,
    mode: "online",
    subjects: "Data science,Web Development,Smart Contracts ",
  },
  {
    name: "chainsort",
    stars: 4,
    mode: "online",
    subjects: "Data science,Web Development,Smart Contracts ",
  },
  {
    name: "chainsort",
    stars: 4,
    mode: "online",
    subjects: "Data science,Web Development,Smart Contracts ",
  },
];
const BootcampCardsList = () => {
  return (
    <div className="max-w-5xl mx-auto m-10">
      <h1 className="text-center text-4xl font-bold pb-8 text-gray-700 tracking-wider">
        Featured Schools and Bootcamps
      </h1>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {demoBootcamps.map(({ name, stars, mode, subjects }) => (
          <BootcampCard
            key={uniqId()}
            name={name}
            stars={stars}
            mode={mode}
            subjects={subjects}
          />
        ))}
      </div>
    </div>
  );
};

export default BootcampCardsList;
