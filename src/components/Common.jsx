import React, { useEffect, useState } from "react";

function Common({ timeEvent }) {
  const [days, setDays] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date().getTime();
      const distance = (timeEvent - now) / 1000;
      if (distance > 0) {
        const days = Math.floor(distance / (60 * 60 * 24));
        const hrs = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
        const min = Math.floor((distance % (60 * 60)) / 60);
        const sec = Math.floor(distance % 60);
        setDays(days);
        setHrs(hrs);
        setMin(min);
        setSec(sec);
      } else {
        clearInterval(timerId);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeEvent]);
  return (
    <div className="flex justify-center   flex-col items-center ">
      <div className="flex flex-col justify-around  md:text-3xl gap-2 border-4 border-pinery w-[350px] h-36 md:w-[75%] md:h-60 ">
        <h1 className="text-center ">يبدأ المؤتمر بعد</h1>
        <div className="flex justify-around  flex-row-reverse ">
          <h1>
            {days}
            <br />
            days
          </h1>
          <h1>
            {hrs} <br /> hrs
          </h1>
          <h1>
            {min} <br /> min
          </h1>
          <h1>
            {sec} <br /> sec
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Common;
