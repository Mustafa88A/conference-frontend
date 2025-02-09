import React from "react";
import logo from "../assets/logo.png";
import SwiperCard from "../components/Swiper";
import data from "../data";
import Common from "../components/Common";
import Category from "../components/Category";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const timeEvent = new Date("Apr, 30,2025").getTime();
  const send = () => {
    navigate(`/send`);
  };
  return (
    <div className="flex flex-col gap-14 ">
      <div className="w-[100%] md:rounded-br-[50%]  md:rounded-bl-[50%] flex justify-center bg-pinery fixed">
        <nav className=" w-[85%] md:h-24  flex justify-between items-center flex-row-reverse sticky   ">
          <button className="" onClick={send}>
            ارسال البحث
          </button>
          <img className="w-10 h-10 " src={logo} alt="" />
        </nav>
      </div>

      <div className="h-[430px] bg-pinery flex justify-center  flex-col gap-10 text-xl text-center rounded-br-[30%]  rounded-bl-[30%] md:rounded-bl-[400px] md:rounded-br-[400px]  md:text-4xl ">
        <h1> عنوان المؤتمر // مؤتمر جامعة الكفيل </h1>
        <h1> مكان المؤتمر // النجف الاشرف /حي النداء / جامعة الكفيل </h1>
        <h1> وقت المؤتمر// 5/اكتوبر //2024 </h1>
      </div>
      <Common timeEvent={timeEvent} />
      <div className="bg-pinery  h-32 flex  text-sm  justify-around items-center md:text-3xl md:h-40">
        <h1 className="">
          اذا كنت ترغب في اضافة بحثك في جامعتنا <br />
          اضغط على ارسال البحث والحصول على شهادة مشاركة
        </h1>
        <button onClick={send}> ارسال البحث</button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[330px] md:w-[75%]  md:text-3xl ">
          <h1 className="font-bold text-lg md:text-4xl">نبذة عن </h1>
          <br />
          <p className="leading-[30px] md:leading-[70px]">
            سيعقد المؤتمر العلمي الدولي السادس لجامعة الكفيل "ISCKU2024-II" في
            النجف الأشرف، (العراق)، خلال الفترة من 10 إلى 12 كانون الأول
            (ديسمبر) 2024. ISCKU2024-II هو مؤتمر سنوي يهدف إلى جمع المشاركين
            معًا من المؤسسات الأكاديمية والصناعية والهندسية والحكومية حول العالم
            لحضور المؤتمر ومشاركة تجارب التجارب الميدانية والدروس مع المتحمسين
            الآخرين وتبادل الأفكار الجديدة ومناقشة المجالات المبتكرة واستكشافها
            تمكين التقنيات لمجموعة متنوعة من التطبيقات. لقد كان ISCKU2024-II
            بمثابة منصة نشطة توفر للمشاركين فرصًا كبيرة لإقامة علاقات بحثية
            والعثور على شركاء للمستقبل.
          </p>
        </div>
      </div>
      <div>
        <Category />
      </div>
      <h1 className="font-bold text-lg md:text-4xl md:mr-48">المتحدثون </h1>
      <div className="flex justify-center items-center   ">
        <SwiperCard data={data} />
      </div>
      <div className="flex justify-center items-center bg-pinery h-60 ">
        {/*footer */}
      </div>
    </div>
  );
}

export default Home;
