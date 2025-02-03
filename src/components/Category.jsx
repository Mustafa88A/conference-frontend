import React from "react";
import eng from "../assets/11.png";
import dr from "../assets/22.png";
import tech from "../assets/33.png";
function Category() {
  return (
    <div className="flex justify-center ">
      <div className=" md:w-[75%] flex flex-col gap-5   ">
        <h1 className="md:text-4xl">محاور المؤتمر </h1>
        {/* <div className="flex justify-center"> */}
        <div className="flex flex-wrap text-center  justify-around gap-y-5  md:text-3xl  md:justify-between">
          <div>
            <img className="w-40 h-36 md:w-80 md:h-56 " src={eng} alt="" />
            <h1>Computer technologies</h1>
          </div>
          <div>
            <img className="w-40 h-36 md:w-80 md:h-56 " src={dr} alt="" />
            <h1>Medicine</h1>
          </div>
          <div>
            <img className="w-40 h-36 md:w-80 md:h-56 " src={tech} alt="" />
            <h1>Medical techniques</h1>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Category;
