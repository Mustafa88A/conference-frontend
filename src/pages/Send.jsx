import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewResearch } from "../store/reserch/reserchSilce";
function Send() {
  const categories = useSelector((state) => state.fetch.category);

  const [title, setTitle] = useState("");
  const [nameOfResearch, setNameOfResearch] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [university, setUniversity] = useState("");
  const [college, setCollege] = useState("");
  const [summary, setSummary] = useState("");
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");

  const [participant, setParticipant] = useState([
    {
      username: "",
      coaction: "",
      cityParticipant: "",
      universityParticipant: "",
    },
  ]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createNew = (e) => {
    e.preventDefault();
    const post = {
      title,
      nameOfResearch,
      email,
      phone,
      city,
      university,
      college,
      summary,
      file,
      category,
      participant,
    };
    dispatch(createNewResearch(post));
  };
  function handleFile(e) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  const handleInputChange = (index, field, value) => {
    const updatedUser = [...participant];
    updatedUser[index][field] = value;
    setParticipant(updatedUser);
  };

  return (
    <div className="bg-pinery h-full">
      <button
        className="bg-seceder w-24 m-[18px] h-8 md:w-40 md:h-11"
        onClick={() => navigate(`/`)}
      >
        الصفحة الرئسية{" "}
      </button>
      <div className="flex flex-col  items-center justify-center">
        <form
          action=""
          className="w-[340px]   h-auto flex flex-col gap-5 rounded-[20px] bg-seceder md:w-[95%] "
          onSubmit={createNew}
        >
          <div className="flex justify-around mt-4">
            <input
              type="text"
              placeholder="اسم البحث "
              className="w-56 bg-thrid placeholder:text-black p-2 md:w-[71%] md:h-"
              onChange={(e) => setTitle(e.target.value)}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className=" w-24  h-10 bg-thrid md:w-[15%] md:h-11"
            >
              {categories?.map((category) => {
                return (
                  <>
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div>
            <div className="flex flex-wrap justify-around  h-72 md:h-80 ">
              <input
                type="text"
                placeholder="اسم الباحث"
                className="w-40 h-8 bg-thrid placeholder:text-black p-2 md:h-12 md:w-96"
                onChange={(e) => setNameOfResearch(e.target.value)}
              />
              <input
                type="email"
                placeholder="البريد الالكتروني "
                className="w-40 h-8 bg-thrid placeholder:text-black p-2 md:h-12 md:w-96"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="رقم الهاتف "
                className="w-40 h-8 bg-thrid placeholder:text-black p-2 md:h-12 md:w-96"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="المحافظة"
                className="w-40 h-8 bg-thrid placeholder:text-black p-2 md:h-12 md:w-96"
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="الجامعة "
                className="w-40 h-8 bg-thrid placeholder:text-black p-2 md:h-12 md:w-96"
                onChange={(e) => setUniversity(e.target.value)}
              />
              <input
                type="text"
                placeholder="الكلية"
                className="w-40 h-8 bg-thrid placeholder:text-black p-2 md:h-12 md:w-96"
                onChange={(e) => setCollege(e.target.value)}
              />
              <textarea
                name=""
                rows={4}
                placeholder="مخلص البحث"
                className="w-[330px] bg-thrid placeholder:text-black p-2 md:w-[93%] md:h-44"
                onChange={(e) => setSummary(e.target.value)}
              ></textarea>
            </div>
          </div>
          <h1 className="mr-2 md:mr-14">الباحثين المشتركين</h1>
          <>
            {participant?.map((user, index) => (
              <div className="flex  flex-wrap justify-around items-center  h-32  md:h-32">
                <input
                  value={user.username}
                  type="text"
                  placeholder="اسم الباحث"
                  className="w-40 h-8 placeholder:text-black bg-thrid p-2 md:w-96 md:h-11"
                  onChange={(e) =>
                    handleInputChange(index, "username", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={user.coaction}
                  placeholder="البريد الالكنروني او رقم الهاتف"
                  className="w-40 h-8 placeholder:text-black bg-thrid p-2 md:w-96 md:h-11"
                  onChange={(e) =>
                    handleInputChange(index, "coaction", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={user.cityParticipant}
                  placeholder="المحافظة"
                  className="w-40 h-8 placeholder:text-black bg-thrid p-2 md:w-96 md:h-11"
                  onChange={(e) =>
                    handleInputChange(index, "cityParticipant", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={user.universityParticipant}
                  placeholder="الكلية و الجامعة "
                  className="w-40 h-8 placeholder:text-black bg-thrid p-2 md:w-96 md:h-11"
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "universityParticipant",
                      e.target.value
                    )
                  }
                />
                <button
                  onClick={() =>
                    setParticipant([
                      ...participant,
                      {
                        username: "",
                        coaction: "",
                        cityParticipant: "",
                        universityParticipant: "",
                      },
                    ])
                  }
                  class="text-xl w-24  rounded bg-pinery text-white relative overflow-hidden group z-10 hover:text-white duration-1000 md:w-32 md:h-11"
                >
                  <span class="absolute bg-emerald-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                  <span class="absolute bg-emerald-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                  اضافة باحث
                </button>{" "}
              </div>
            ))}
          </>
          <input
            onChange={handleFile}
            type="file"
            className="cursor-pointer  w-56  mr-2 md:mr-12"
          />
          <br />
          <div className=" w-[340px] text-end md:w-[95%]">
            <button
              type="submit"
              class="text-xl w-28  rounded bg-seceder relative overflow-hidden group z-10 hover:text-white duration-1000 md:w-32 md:h-11"
            >
              <span class="absolute bg-emerald-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span class="absolute bg-emerald-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              ارسال البحث
            </button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Send;
{
  /* <AddRes /> */
}
