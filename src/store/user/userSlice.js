import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const apiUrl = process.env.REACT_APP_API_URL;
console.log("11111", apiUrl);

const initialState = {
  loading: false,
  data: null,
  error: null,
  user: null,
  isLogged: false,
};

export const getUser = createAsyncThunk("user/getUser", async () => {
  const token = localStorage.getItem("Token");
  // console.log(token, "toke");
  try {
    const res = await axios.get(`http://localhost:7800/admin/`, {
      headers: { Authorization: `Bearer${token}` },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

//login
export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async ({ userData }) => {
    try {
      const res = await axios.post(
        `http://localhost:7800/admin/login-admin`,
        userData
      );
      // console.log(res, "res");

      const data = res.data;
      // console.log("data", data);

      localStorage.setItem("Token", data.generateToken);
      // console.log("localhost", localStorage);

      const decode = jwtDecode(data.generateToken);
      // console.log("decode", decode);

      return decode;
    } catch (error) {
      console.log(error.message);
    }
  }
);

//Register

export const fetchRegister = createAsyncThunk(
  "user/fetchRegister",
  async (adminInfo) => {
    try {
      const formData = new FormData();
      formData.append("username", adminInfo.username);
      formData.append("email", adminInfo.email);
      formData.append("phone", adminInfo.phone);
      formData.append("password", adminInfo.password);

      const res = await axios.post(
        "http://localhost:7800/admin/signup",
        formData,
        {
          headers: {
            //يستخدم في حال ارسال فقط بيانات
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res, "res");

      const data = res.data;
      localStorage.setItem("Token", data.generateToken);
      const decode = jwtDecode(data.generateToken);
      return decode;
    } catch (error) {
      throw error.message;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setLogin: (state) => {
      try {
        const token = localStorage.getItem("Token");
        // console.log("4", token);

        if (token) {
          const decoded = jwtDecode(token);
          state.isLogged = true;
          state.data = decoded;
        } else {
          console.log("No token found");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // تخزين البيانات

        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
    //login
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isLogged = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //Register
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.loading = true;
        state.data = action.payload;
        state.isLogged = true;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setLogin } = userSlice.actions;
export default userSlice.reducer;
