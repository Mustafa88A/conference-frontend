import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putState } from "../store/reserch/reserchSilce";

function States({ resId }) {
  console.log(resId, "re_id");

  const [sta, setSta] = useState("pending"); // الحالة المحلية
  const dispatch = useDispatch();

  console.log(sta, "sta");

  // تغيير الحالة إلى "Approved"
  const handleStatusApproved = async () => {
    if (!resId) {
      console.error("Error: ID is not found");
      return;
    }

    try {
      await dispatch(
        putState({ resId: resId._id, state: "Approved" })
      ).unwrap(); // تأكد من تنفيذ التحديث
      setSta("Approved"); // تحديث الحالة المحلية فقط إذا نجح الطلب
      console.log("تم تحديث الحالة إلى Approved");
    } catch (error) {
      console.error("فشل في تحديث الحالة:", error);
    }
  };

  // تغيير الحالة إلى "Reject"
  const handleStatusReject = async () => {
    if (!resId) {
      console.error("Error: ID is not found");
      return;
    }

    try {
      await dispatch(putState({ resId, state: "Reject" })).unwrap();
      setSta("Reject");
      console.log("تم تحديث الحالة إلى Reject");
    } catch (error) {
      console.error("فشل في تحديث الحالة:", error);
    }
  };
  return (
    <div className="w-20 flex justify-between">
      {/* زر الموافقة */}
      <button
        className="group cursor-pointer outline-none hover:rotate-90 duration-300"
        title="Approve"
        onClick={handleStatusApproved}
      >
        <svg
          className="stroke-green-500 fill-none group-hover:fill-green-800 group-active:stroke-green-200 group-active:fill-green-600 group-active:duration-0 duration-300"
          viewBox="0 0 24 24"
          height="30px"
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="1.5"
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          />
          <path strokeWidth="1.5" d="M8 12H16" />
          <path strokeWidth="1.5" d="M12 16V8" />
        </svg>
      </button>

      {/* زر الرفض */}
      <button
        className="group cursor-pointer outline-none hover:rotate-90 duration-300"
        title="Reject"
        onClick={handleStatusReject}
      >
        <svg
          className="stroke-red-500 fill-none group-hover:fill-red-800 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
          viewBox="0 0 24 24"
          height="30px"
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="1.5"
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          />
          <path strokeWidth="1.5" d="M8 12H16" />
        </svg>
      </button>
    </div>
  );
}

export default States;
