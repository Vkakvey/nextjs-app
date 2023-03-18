import React from "react";

const Banner = () => {
  const banner =
    "https://media.istockphoto.com/id/1371781714/photo/food-collage-set-of-various-fruits-and-vegetables.jpg?b=1&s=170667a&w=0&k=20&c=IrD8oRPKAb1-TZZR9Q0WQJHWnBZwwjiCaj83FsaVYMU=";
  return (
    <div className="w-full">
      <div className="max-w-[1240px] h-[35vh] w-full mx-auto">
        <img
          src={banner}
          className="w-[100%] h-[100%] object-cover p-2 rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
