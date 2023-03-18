import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Juice_1 from "../components/Img/juice1.jpg";
import Juice_2 from "../components/Img/juice2.jpg";
import Juice_3 from "../components/Img/juice3.jpg";
import Juice_4 from "../components/Img/juice4.jpg";

const Fruitjuice = () => {
  const [buy, setBuy] = useState(0);
  const handleRed = () => {
    setRed(red + 1);
  };
  const [red, setRed] = useState(false);
  const [count_1, setCount_1] = useState(0);

  const inc_1 = () => {
    setCount_1(count_1 + 1);
  };
  const dec_1 = () => {
    setCount_1(count_1 - 1);
  };
  const [count_2, setCount_2] = useState(0);
  const inc_2 = () => {
    setCount_2(count_2 + 1);
  };
  const dec_2 = () => {
    setCount_2(count_2 - 1);
  };
  const [count_3, setCount_3] = useState(0);
  const inc_3 = () => {
    setCount_3(count_3 + 1);
  };
  const dec_3 = () => {
    setCount_3(count_3 - 1);
  };
  const [count_4, setCount_4] = useState(0);
  const inc_4 = () => {
    setCount_4(count_4 + 1);
  };
  const dec_4 = () => {
    setCount_4(count_4 - 1);
  };
  const [count_5, setCount_5] = useState(0);
  const inc_5 = () => {
    setCount_5(count_4 + 1);
  };
  const dec_5 = () => {
    setCount_5(count_5 - 1);
  };
  const juice = [
    {
      id: 1,
      title: "Juice Good For Healt",
      price: "5.00",
      Img: Juice_1,
      sum: inc_1,
      sub: dec_1,
      cout: count_1,
    },
    {
      id: 2,
      title: "Juice Good For Healt",
      price: "4.00",
      Img: Juice_2,
      sum: inc_2,
      sub: dec_2,
      cout: count_2,
    },
    {
      id: 3,
      title: "Juice Good For Healt",
      price: "7.00",
      Img: Juice_3,
      sum: inc_3,
      sub: dec_3,
      cout: count_3,
    },
    {
      id: 4,
      title: "Juice Good For Healt",
      price: "10.00",
      Img: Juice_4,
      sum: inc_4,
      sub: dec_4,
      cout: count_4,
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full max-w-[1240px]  mx-auto">
        <h2 className="lg:text-start text-center text-black text-5xl font-bold py-7">
          Fruite Juices
        </h2>
        <p className="text-xl lg:text-start text-center text-slate-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perspiciatis, doloribus.
        </p>
      </div>
      <div className="w-full  max-w-[1240px] gap-12 mx-auto py-16 lg:grid-cols-4 grid">
        {/* cart */}
        {juice.map((res, index) => (
          <div className="w-[290px] h-[420px] p-3 border-2 border-slate-700 rounded-3xl">
            <Image className="h-[60%] rounded-lg object-cover" src={res.Img} />
            <h2 className="text-xl text-slate-600 font-bold text-center py-2">
              {res.title}
            </h2>
            <div className="flex items-center gap-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold text-black text-center">
              $ {res.price}
            </p>
            <div className="w-full flex gap-3  justify-center items-center py-3">
              <button
                onClick={handleRed}
                className="bg-slate-300  active:bg-slate-400 text-md font-bold  flex items-center gap-2 py-1 px-3 rounded-[10px] text-slate-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-9 font-bold "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                ADD TO CART
              </button>
              <div className="w-[50%] flex items-center h-[50px] border-2 border-slate-700 rounded-2xl">
                <button
                  onClick={res.sub}
                  className="h-full px-3 text-black text-2xl font-bold border-r-2 border-slate-700"
                >
                  -
                </button>
                <p className="px-5 text-black font-b-ld text-lg">{res.cout}</p>
                <button
                  onClick={res.sum}
                  className="h-full px-3 text-black text-2xl font-bold border-l-2 border-slate-700"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruitjuice;
