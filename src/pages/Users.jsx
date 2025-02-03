import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Users() {
  const users = useSelector((state) => state.user.user);
  // console.log("87879", users);

  const navigate = useNavigate();
  return (
    <div className="flex justify-center flex-col gap-5 items-center">
      <div className="flex  w-[95%] h-10 mt-6 justify-between md:w-[95%]">
        <button
          onClick={() => {
            navigate("/dsh");
          }}
          className="cursor-pointer transition-all 
            bg-gray-700 text-white px-6 py-2 rounded-lg
            border-green-400
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
        >
          القائمة
        </button>
        <h1 className="text-lg md:text-3xl">المستخدمين</h1>
      </div>
      <div className="flex justify-between pr-2 md:text-3xl bg-pinery w-[95%] md:h-12">
        <h1>اسم المقيم</h1>
        <h1>رقم الهاتف</h1>
        <h1>البريد الالكتروني</h1>
      </div>
      {users?.map((user) => (
        <div className="flex justify-between pr-2 bg-pinery md:text-3xl w-[95%] md:h-12">
          <h1>{user?.username}</h1>
          <h1>{user?.phone}</h1>
          <h1>{user?.email}</h1>
        </div>
      ))}
      <br />
    </div>
  );
}

export default Users;
