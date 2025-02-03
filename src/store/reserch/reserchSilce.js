import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const initialState = {
  loading: false,
  data: null,
  error: null,
  isLogged: false,
};

export const getResearch = createAsyncThunk(
  "research/getResearch",
  async () => {
    try {
      const res = await axios.get(
        `http://localhost:7800/research?status=pending`
      );
      const data = res.data;
      // console.log("data", data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createNewResearch = createAsyncThunk(
  "research/createNewResearch",
  async (post) => {
    try {
      const formData = new FormData();
      const {
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
      } = post;

      // التأكد من أن participant هو مصفوفة واستخراج البيانات منها
      if (Array.isArray(participant) && participant.length > 0) {
        const [
          {
            username,
            coaction,
            city: cityParticipant,
            university: universityParticipant,
          },
        ] = participant;

        // إضافة بيانات المشاركين
        formData.append("participantUsername", username);
        formData.append("participantCoaction", coaction);
        formData.append("participantCity", cityParticipant);
        formData.append("participantUniversity", universityParticipant);
      }

      // إضافة بقية البيانات
      formData.append("title", title);
      formData.append("nameOfResearch", nameOfResearch);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("city", city);
      formData.append("university", university);
      formData.append("college", college); // إزالة المسافة الإضافية
      formData.append("summary", summary);
      formData.append("category", category);
      formData.append("file", file);
      const res = await axios.post("http://localhost:7800/research", formData);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const putState = createAsyncThunk(
  "research/putState",
  async ({ resId, state }) => {
    console.log(resId, "id for fec");

    try {
      const res = await axios.patch(
        `http://localhost:7800/research/form/${resId}`,
        { state }
      );
      const data = res.data;
      console.log("datas", data);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const researchSlice = createSlice({
  name: "research",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get api
    builder
      .addCase(getResearch.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(getResearch.fulfilled, (state, action) => {
        state.loading = true;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getResearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //new research api
    builder
      .addCase(createNewResearch.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createNewResearch.fulfilled, (state, action) => {
        state.loading = true;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(createNewResearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // put api
    builder
      .addCase(putState.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(putState.fulfilled, (state, action) => {
        state.loading = true;
        state.data = action.payload;
      })
      .addCase(putState.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default researchSlice.reducer;
