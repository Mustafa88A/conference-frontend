import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import fetchSlice from "./reserch/fetching";
import researchSlice from "./reserch/reserchSilce";

const store = configureStore({
  reducer: {
    user: userSlice,
    fetch: fetchSlice,
    research: researchSlice,
  },
});

export default store;
