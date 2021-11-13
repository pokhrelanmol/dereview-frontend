import { useState, useEffect } from "react";
import router from "next/router";
import Link from "next/link";
import { PopUp } from "./createCouseHandler/PopUp";
const Header = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const handleCreateCourse = () => {
    setShowPopUp(true);
  };
  return (
    <>
      <div className="h-20 shadow-md  bg-white flex justify-around items-center  ">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <img
            className=" h-20 w-36 sm:h-14 cursor-pointer object-cover"
            src="/images/Logo.png"
            alt="Logo"
          />
        </div>
        {/* navlinks */}
        <ul className="flex flex-col md:flex-row pt-48   md:p-0 ">
          <li className=" relative cursor-pointer px-4 text-base tracking-wide ">
            <Link href="/">
              <a className="links">Review</a>
            </Link>
          </li>
          <li className="  group relative dropdown px-4 cursor-pointer text-base tracking-wide ">
            <Link href="/">
              <a onClick={handleCreateCourse} className="links">
                Create Course
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {showPopUp ? <PopUp setShowPopUp={setShowPopUp} /> : null}
    </>
  );
};

export default Header;
