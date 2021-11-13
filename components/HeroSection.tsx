import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="  shadow-md -z-10 ">
      <div className=" grid md:grid-cols-2 max-w-5xl mx-auto  ">
        <div className="flex flex-col justify-center items-center  pt-44 md:pt-0 ">
          <h1 className=" font-bold  text-5xl md:text-6xl sm:font-extrabold text-gray-700 sm:p-5  leading-14 tracking-wide      ">
            Your Guide to the Best Tech Bootcamps
          </h1>
          <p className="text-lg text-gray-800 leading-14 tracking-wider px-5 ">
            Your Guide to the Best Tech Bootcamps Providing data-driven rankings
            and reviews to launch your tech career since 2014.
          </p>
        </div>
        <div className=" mt-5">
          <Image
            src="/images/illustration.png"
            alt="hero-image"
            objectFit="contain"
            className=""
            width={700}
            height={500}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
