import { useSelector } from "react-redux";
import States from "../components/States";
import { useNavigate } from "react-router-dom";

function Reserch() {
  const navigate = useNavigate();
  const reserchs = useSelector((state) => state?.research?.data);
  console.log("kalfaaiojrioghiORW", reserchs);

  return (
    <div className="flex justify-center flex-col gap-5 items-center">
      {/* الحاوية العلوية */}
      <div className="flex  w-[95%] h-10 mt-6 justify-between md:w-[95%]">
        <button
          onClick={() => {
            navigate("/dsh");
          }}
          class="cursor-pointer transition-all 
          bg-gray-700 text-white px-6 py-2 rounded-lg
          border-green-400
          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
        >
          القائمة
        </button>
        <h1 className="text-lg md:text-3xl">البحوث</h1>
      </div>

      {/* الجدول */}

      <div className="overflow-x-auto md:overflow-hidden w-full flex gap-5 md:justify-center md:items-center flex-col">
        <div className="flex  min-w-[900px]  text-lg md:w-[95%] md:text-2xl md:h-10 md:items-center">
          <h2 className="w-52 bg-pinery text-center md:w-96 md:h-9">
            اسم البحث
          </h2>
          <h2 className="w-40 bg-pinery text-center md:w-96 md:h-9">
            اسم الباحث
          </h2>
          <h2 className="w-52 text-center bg-pinery md:w-96 md:h-9">
            البريد الالكتروني
          </h2>
          <h2 className="w-28 text-center bg-pinery md:w-96 md:h-9">
            رقم الهاتف
          </h2>
          <h2 className="w-28 text-center bg-pinery md:w-80 md:h-9">
            نوع البحث
          </h2>
          <h2 className="w-20 text-center bg-pinery md:h-9">الحالة</h2>
        </div>
        <div className="flex  min-w-[900px] text-lg md:w-[95%] md:text-2xl md:h-10 md:items-center">
          {reserchs?.map((res) => (
            <>
              <h2 className="w-52 bg-pinery text-center md:w-96 md:h-9">
                {res.title}
              </h2>
              <h2 className="w-40 bg-pinery text-center md:w-96 md:h-9">
                {res.nameOfResearch}
              </h2>
              <h2 className="w-52 text-center bg-pinery md:w-96 md:h-9">
                {res.email}{" "}
              </h2>
              <h2 className="w-28 text-center bg-pinery md:w-96 md:h-9">
                {res.phone}
              </h2>
              <h2 className="w-28 text-center bg-pinery md:w-80 md:h-9">
                {res.category.name}
              </h2>
              <States resId={res} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reserch;
