import React, { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function SwiperCard({ data }) {
  const [infos, setInfo] = useState(data);
  return (
    <Splide
      hasTrack={false}
      options={{
        perPage: 2,
        height: "21rem",
        rewind: false,
        gap: "1rem",
      }}
    >
      <SplideTrack>
        {[...Array(4)].map((_, index) => (
          <SplideSlide key={index}>
            <div className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5">
              <div className="group-hover:scale-110 w-full h-52 bg-blue-400 duration-500"></div>
              <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-32">
                <div className="absolute -z-10 left-0 w-64 h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                <span className="text-xl font-bold">Hover me!</span>
                <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
}
export default SwiperCard;
