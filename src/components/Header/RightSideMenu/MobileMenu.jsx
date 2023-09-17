import { useState } from "react";

function MobileMenu() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        onClick={() => setActive((active) => !active)}
        id="burger"
        className={`group  relative z-10 h-5 w-[30px] cursor-pointer sm:block ${
          active ? "active" : ""
        }`}
      >
        <span className="absolute left-0 top-0 h-[1px] w-full translate-y-0 bg-black transition-transform group-[.active]:translate-y-2 group-[.active]:rotate-45"></span>
        <span className="absolute left-0 top-1/2 h-[1px] w-full translate-y-0 bg-black group-[.active]:opacity-0"></span>
        <span className="absolute bottom-0 left-0 h-[1px] w-full bg-black transition-transform group-[.active]:-translate-y-[11px] group-[.active]:-rotate-45"></span>
      </div>

      {active ? (
        <nav
          id="mobile"
          className="z-500 absolute right-0 top-10 h-[124px] w-[180px] items-center justify-center bg-menuColor shadow-menu"
        >
          <ul className="mt-2 flex flex-col items-center gap-5">
            <li className="hover:bg-textColor hover:text-textWhite">
              <a href="#hotTopics">Hot topics</a>
            </li>
            <li className="hover:bg-textColor hover:text-textWhite">
              <a href="#news">Latest News</a>
            </li>
            <li className="hover:bg-textColor hover:text-textWhite">
              <a href="#blogs">Blogs</a>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
}
export default MobileMenu;
