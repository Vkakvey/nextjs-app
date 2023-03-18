import React from "react";
import Image from "next/image";
import Post from "../components/Img/poster.jpg";
import Food_1 from "../components/Img/food1.jpg";
import Food_2 from "../components/Img/food2.jpg";

const Poster = () => {
  const Img_1 =
    "https://images.unsplash.com/photo-1622484211690-b38a079a9588?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2QlMjBwb3N0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";
  const Img_2 =
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60";
  const Img_3 =
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";
  return (
    <div className="w-full">
      <div className="w-full max-w-[1240px] mx-auto flex items-center">
        <div className="flex items-center justify-center p-2 h-[70vh] w-[100%]">
          <div className="w-full h-full bg-gradient-to-r relative group from-cyan-500 to-blue-500  rounded-lg">
            <Image
              className="w-full duration-300 opacity-100 group-hover:opacity-30 absolute object-cover h-[100%] rounded-lg"
              src={Post}
              alt=""
            />

            <div className="absolute top-[40%] w-[50%]  grid items-center  left-[24%] opacity-0 group-hover:opacity-100">
              <p className="text-center py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque dolorem deleniti rerum.
              </p>
              <button className="bg-white px-10 mx-auto rounded-lg py-3 text-black text-xl font-bold">
                Info
              </button>
            </div>
          </div>
        </div>
        <div className="grid w-[50%] grid-cols-1 items-center h-[70vh] p-2">
          <Image
            className="h-[98%] rounded-[8px] w-full object-cover "
            src={Food_1}
            alt=""
          />
          <Image
            className="h-[98%] mt-1  rounded-lg w-full object-cover"
            src={Food_2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Poster;
