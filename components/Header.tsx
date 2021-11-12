import { useState, useEffect } from "react";
import router from "next/router";
import Link from "next/link";
const Header = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (window.screen.width <= 768) {
      setShow(!show);
    }
  }, []);
  return (
    <div className="h-20 mix-blend-darken shadow-md flex justify-around items-center  ">
      <div onClick={() => router.push("/")} className="cursor-pointer">
        <img
          className=" h-20 w-36 sm:h-14 cursor-pointer object-cover"
          src="/images/Logo.png"
          alt="Logo"
        />
      </div>
      {/* navlinks */}
      {show ? (
        <ul className="flex flex-col md:flex-row pt-48   md:p-0 ">
          <li className=" relative cursor-pointer px-4 text-base tracking-wide ">
            <Link href="/">
              <a className="links">Bootcamps Ranking</a>
            </Link>
          </li>
          <li className="  group relative dropdown px-4 cursor-pointer text-base tracking-wide ">
            <Link href="/">
              <a className="links">Search Bootcamps</a>
            </Link>
          </li>
          <li className="links px-4 ">
            <Link href="/">
              <a className="links">Blog</a>
            </Link>
          </li>
          <li className="links px-4 ">
            <Link href="/">
              <a className="links">Write Review</a>
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
      <i
        onClick={() => setShow(!show)}
        className="fas fa-bars visible pr-10 text-lg md:invisible"
      ></i>
    </div>
  );
};

export default Header;
