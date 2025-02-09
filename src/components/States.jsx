import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { putState } from "../store/reserch/reserchSilce";

function States({ resId }) {
  // console.log("resId", resId);

  const dispatch = useDispatch();
  const research = useSelector((state) =>
    state.research.data.find((res) => res._id === resId)
  );
  // const research = useSelector((state) => state.research.data);
  // const researchId = research.find((res) => res._id === resId);
  // console.log("researchId", researchId);

  // console.log("res777777777", research);

  // Determine the current state (default to "pending" if not set)
  const currentState = research?.state || "pending";

  // Toggle between "Approved" and "Reject"
  const handleStatusToggle = async (e) => {
    if (!resId) {
      console.error("Error: ID is not found");
      return;
    }

    const newState = e.target.checked ? "Approved" : "Reject";

    try {
      await dispatch(putState({ resId, state: newState })).unwrap();
      console.log(`تم تحديث الحالة إلى ${newState}`);
    } catch (error) {
      console.error("فشل في تحديث الحالة:", error);
    }
  };

  return (
    <div className="w-20 flex justify-center items-center">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          {/* Checkbox Input */}
          <input
            type="checkbox"
            className="sr-only"
            checked={currentState === "Approved"}
            onChange={handleStatusToggle}
          />
          {/* Toggle Line */}
          <div
            className={`block w-10 h-6 rounded-full transition-colors duration-300 ${
              currentState === "Approved" ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          {/* Toggle Dot */}
          <div
            className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ${
              currentState === "Approved" ? "translate-x-4" : "translate-x-0"
            }`}
          ></div>
        </div>
        {/* Label */}
        <span className="ml-2 text-sm">
          {currentState === "Approved" ? "مقبول" : "مرفوض"}
        </span>
      </label>
    </div>
  );
}

export default States;
