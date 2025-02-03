import React from "react";
import { useNavigate } from "react-router-dom";

function Dsh() {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    window.location.href = "/login";
  }
  return (
    <div className="bg-pinery h-[100vh]">
      <div className=" h-full  flex justify-around flex-wrap items-center md:h-[80%] md:items-end">
        <button
          onClick={() => navigate("/")}
          class="group relative text-center w-36 h-36 md:w-[400px] text-neutral-50 bg-neutral-800  overflow-hidden"
        >
          <p class="absolute w-36 text-center   z-10   duration-500">
            الصفحة الرئيسية
          </p>
          <div class="">
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16  bottom-36 group-hover:-bottom-1 delay-500 right-0 "></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40  md:w-16 -bottom-40 group-hover:-bottom-1 right-6 md:right-16"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-10 md:right-32"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 -bottom-40 group-hover:-bottom-1 right-16 md:right-48"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-[85px] md:right-64"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 -bottom-40 group-hover:-bottom-1 right-[105px] md:right-80"></div>
            <div class="absolute duration-500 bg-pinery w-4 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-32 md:right-96"></div>
          </div>
        </button>
        <button
          onClick={() => {
            navigate("/dsh/eva");
          }}
          class="group relative w-36 h-36 md:w-[400px] text-neutral-50 bg-neutral-800  overflow-hidden"
        >
          <p class="absolute text-center w-36  z-10   duration-500">المقيمين</p>
          <div class="">
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16  bottom-36 group-hover:-bottom-1 delay-500 right-0 "></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40  md:w-16 -bottom-40 group-hover:-bottom-1 right-6 md:right-16"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-10 md:right-32"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 -bottom-40 group-hover:-bottom-1 right-16 md:right-48"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-[85px] md:right-64"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 -bottom-40 group-hover:-bottom-1 right-[105px] md:right-80"></div>
            <div class="absolute duration-500 bg-pinery w-4 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-32 md:right-96"></div>
          </div>
        </button>
        <button
          onClick={() => {
            navigate("/dsh/reserch");
          }}
          class="group relative w-36 h-36 md:w-[400px] text-neutral-50 bg-neutral-800  overflow-hidden"
        >
          <p class="absolute  text-center w-36 z-10   duration-500"> البحوث</p>
          <div class="">
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16  bottom-36 group-hover:-bottom-1 delay-500 right-0 "></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40  md:w-16 -bottom-40 group-hover:-bottom-1 right-6 md:right-16"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-10 md:right-32"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 -bottom-40 group-hover:-bottom-1 right-16 md:right-48"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-[85px] md:right-64"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 -bottom-40 group-hover:-bottom-1 right-[105px] md:right-80"></div>
            <div class="absolute duration-500 bg-pinery w-4 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-32 md:right-96"></div>
          </div>
        </button>
        <button
          onClick={() => {
            navigate("/dsh/user");
          }}
          class="group relative w-36 h-36 md:w-[400px] text-neutral-50 bg-neutral-800  overflow-hidden"
        >
          <p class="absolute text-center w-36  z-10   duration-500">
            المستخدمين
          </p>
          <div class="">
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16  bottom-36 group-hover:-bottom-1 delay-500 right-0 "></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40  md:w-16 -bottom-40 group-hover:-bottom-1 right-6 md:right-16"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-10 md:right-32"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 -bottom-40 group-hover:-bottom-1 right-16 md:right-48"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-[85px] md:right-64"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 -bottom-40 group-hover:-bottom-1 right-[105px] md:right-80"></div>
            <div class="absolute duration-500 bg-pinery w-4 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-32 md:right-96"></div>
          </div>
        </button>{" "}
        <button class="group relative w-36 h-36 md:w-[400px] text-neutral-50 bg-neutral-800  overflow-hidden">
          <p class="absolute text-center w-36  z-10   duration-500">
            {" "}
            اعدادات المؤتمر
          </p>
          <div class="">
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16  bottom-36 group-hover:-bottom-1 delay-500 right-0 "></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40  md:w-16 -bottom-40 group-hover:-bottom-1 right-6 md:right-16"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-10 md:right-32"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 -bottom-40 group-hover:-bottom-1 right-16 md:right-48"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-[85px] md:right-64"></div>
            <div class="absolute duration-500 bg-pinery w-6 h-40 md:w-16 -bottom-40 group-hover:-bottom-1 right-[105px] md:right-80"></div>
            <div class="absolute duration-500 bg-pinery w-4 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-32 md:right-96"></div>
          </div>
        </button>{" "}
        <button
          onClick={logout}
          class="group relative w-36 h-36 md:w-[400px] text-neutral-50 bg-neutral-800  overflow-hidden"
        >
          <p class="absolute text-center w-36  z-10   duration-500">
            تسجيل خروج
          </p>
          <div class="">
            <div class="absolute duration-500 bg-red-500 w-6 h-40 md:w-16  bottom-36 group-hover:-bottom-1 delay-500 right-0 "></div>
            <div class="absolute duration-500 bg-red-500 w-6 h-40  md:w-16 -bottom-40 group-hover:-bottom-1 right-6 md:right-16"></div>
            <div class="absolute duration-500 bg-red-500 w-6 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-10 md:right-32"></div>
            <div class="absolute duration-500 bg-red-500 w-6 h-40 md:w-16 -bottom-40 group-hover:-bottom-1 right-16 md:right-48"></div>
            <div class="absolute duration-500 bg-red-500 w-6 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-[85px] md:right-64"></div>
            <div class="absolute duration-500 bg-red-500 w-6 h-40 md:w-16 -bottom-40 group-hover:-bottom-1 right-[105px] md:right-80"></div>
            <div class="absolute duration-500 bg-red-500 w-4 h-40 md:w-16 bottom-36 group-hover:-bottom-1 delay-500 right-32 md:right-96"></div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Dsh;

// <button class="group relative w-28 h-12 text-neutral-50 bg-neutral-800  overflow-hidden">
// <p class="absolute  font-bold z-10  duration-500"> Button</p>
// <div class="">
//   <div class="absolute duration-500 bg-cyan-600 w-4 h-16  bottom-12 group-hover:-bottom-1 delay-500 right-0"></div>
//   <div class="absolute duration-500 bg-cyan-600 w-4 h-16  -bottom-16 group-hover:-bottom-1 right-4"></div>
//   <div class="absolute duration-500 bg-cyan-600 w-4 h-16  bottom-12 group-hover:-bottom-1 delay-500 right-8"></div>
//   <div class="absolute duration-500 bg-cyan-600 w-4 h-16  -bottom-16 group-hover:-bottom-1 right-12"></div>
//   <div class="absolute duration-500 bg-cyan-600 w-4 h-16  bottom-12 group-hover:-bottom-1 delay-500 right-16"></div>
//   <div class="absolute duration-500 bg-cyan-600 w-4 h-16  -bottom-16 group-hover:-bottom-1 right-20"></div>
//   <div class="absolute duration-500 bg-cyan-600 w-4 h-16  bottom-12 group-hover:-bottom-1 delay-500 right-24"></div>
// </div>
// </button>
