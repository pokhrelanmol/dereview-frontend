import Image from "next/dist/client/image";
import router from "next/router";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div
            onClick={() => router.push("/")}
            className="  w-64 flex-shrink-0 md:mx-0 mx-auto cursor-pointer"
          >
            <Image
              src="/images/Logo.png"
              width={150}
              height={150}
              objectFit="contain"
            />
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="links">First Link</a>
                </li>
                <li>
                  <a className="links">Second Link</a>
                </li>
                <li>
                  <a className="links">Third Link</a>
                </li>
                <li>
                  <a className="links">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="links">First Link</a>
                </li>
                <li>
                  <a className="links">Second Link</a>
                </li>
                <li>
                  <a className="links">Third Link</a>
                </li>
                <li>
                  <a className="links">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="links">First Link</a>
                </li>
                <li>
                  <a className="links">Second Link</a>
                </li>
                <li>
                  <a className="links">Third Link</a>
                </li>
                <li>
                  <a className="links">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="links">First Link</a>
                </li>
                <li>
                  <a className="links">Second Link</a>
                </li>
                <li>
                  <a className="links">Third Link</a>
                </li>
                <li>
                  <a className="links">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container p-5">
            <p className="text-gray-500 text-sm text-center ">
              © 2021 DEREVIEW —
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
