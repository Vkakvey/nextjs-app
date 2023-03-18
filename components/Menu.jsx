import React from "react";

const Menu = () => {
  const Img =
    "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60";
  return (
    <div className="w-full lg:p-0 p-2">
      <div className="mx-auto max-w-[1240px] bg-green-400 rounded-3xl flex items-center justify-between">
        <div className="bg-green-700 py-1 w-[25%] flex rounded-3xl uppercase gap-10 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-sm font-bold text-green-400 lg:block hidden">
            all catagories
          </h2>
        </div>
        <div className="h-[35px] lg:justify-between justify-end rounded-3xl w-[60%]  lg:bg-white flex items-center mr-1.5">
          <form action="" className="lg:block hidden">
            <input
              type="text"
              placeholder="ENTER YOUR KETWORD"
              className="lg:w-[500px] ml-7 lg:block hidden outline-none placeholder:text-[13px] tracking-tight"
            />
          </form>
          <div className="bg-yellow-300 p-2 rounded-full mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
