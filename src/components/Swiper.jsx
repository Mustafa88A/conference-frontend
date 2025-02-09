import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const animation = { duration: 35000, easing: (t) => t };

function SwiperCard({ data }) {
  const [infos, setInfo] = useState(data);
  console.log(infos);

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    pauseOnHover: true,

    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="md:w-[40%]">
      <div ref={sliderRef} className="keen-slider ">
        {infos.map((info) => (
          <div className="keen-slider__slide number-slide1 ">
            <div className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5">
              <div className="group-hover:scale-110 w-full h-52 bg-blue-400 duration-500">
                <img
                  className="object-cover h-52 w-full"
                  src={info.img}
                  alt=""
                />{" "}
              </div>
              <div className="absolute w-56 left-0  -bottom-16 duration-500 group-hover:-translate-y-32">
                <div className="absolute -z-10 left-0 w-64 h-52 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>

                <span className="text-xl font-bold">{info.name}</span>

                <div className="flex gap-5 flex-col mt-5 text-xl">
                  <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                    {info.jop}
                  </p>

                  <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                    {info.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SwiperCard;
