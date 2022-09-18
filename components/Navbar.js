import { useState } from "react";

const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const dropDownList = [
    { text: "Internet", href: "#" },
    { text: "Books", href: "#" },
    { text: "Open Source", href: "#" },
    { text: "About Me", href: "#" },
  ];

  return (
    <nav className="py-10">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="flex w-2/12 items-center">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded bg-gray-500 shadow-2xl">
              E
            </div>
            Epictitus
          </div>
          <div className="w-8/12">
            <ul className="flex items-center space-x-14">
              <li>
                <a href="#" className="hover:underline">
                  UI Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Frontend
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Backend
                </a>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="hover:underline"
                  onClick={() => setDropDown(!dropDown)}
                >
                  Lainnya
                </a>
                {dropDown && (
                  <ul className="absolute z-10 mt-4 w-[200px] rounded bg-gray-800 shadow-2xl">
                    {dropDownList.map(({ text, href }) => (
                      <li
                        key={text}
                        className="border-b border-white/5 last:border-0"
                      >
                        <a
                          href={href}
                          className="flex py-3 px-6 duration-200 hover:bg-gray-600/60"
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="w-2/12">
            <input
              type="text"
              className="w-full rounded-full bg-gray-700 py-3 px-6"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
