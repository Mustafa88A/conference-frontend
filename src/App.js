// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Send from "./pages/Send";
import Dsh from "./pages/Dsh";
import Reserch from "./pages/Reserch";
import Users from "./pages/Users";
import Evaluator from "./pages/Evaluator";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser, setLogin } from "./store/user/userSlice";
import { getResearch } from "./store/reserch/reserchSilce";
import { getCategory } from "./store/reserch/fetching";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(setLogin());
    dispatch(getResearch());
    dispatch(getCategory());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/send" element={<Send />}>
          ارسال البحث
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="dsh" element={<Dsh />}></Route>
        <Route path="dsh/reserch" element={<Reserch />}></Route>
        <Route path="dsh/user" element={<Users />}></Route>
        <Route path="dsh/eva" element={<Evaluator />}></Route>
      </Routes>
    </div>
  );
}

export default App;
