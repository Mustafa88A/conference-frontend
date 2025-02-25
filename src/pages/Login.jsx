import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../store/user/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function login(e) {
    try {
      e.preventDefault();
      let userData = {
        email: email,
        password: password,
      };
      dispatch(fetchLogin({ userData })).then(() => {
        let token = localStorage.getItem("Token");
        if (token) {
          return navigate("/dsh");
        } else {
          alert("Oops something went wrong");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogin() {
    setRedirect(!redirect);
  }

  return (
    <div class=" bg-gray-900 md:h-screen">
      <div class="grid md:grid-cols-2 items-center gap-8 h-full">
        <div class="flex items-center md:p-8 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full">
          <form onSubmit={login} class="max-w-lg w-full mx-auto">
            <div class="mb-12">
              <h3 class="text-gray-800 text-4xl text-left font-bold">
                Sign in
              </h3>
            </div>

            <div>
              <label class="text-gray-800 text-3xl block mb-2">Email</label>
              <div class="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  value={email}
                  required
                  class="w-full text-2xl border-b border-gray-300 focus:border-gray-800 pl-2 pr-4 py-3 outline-none"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute left-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      stroke-miterlimit="10"
                      stroke-width="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>

            <div class="mt-8">
              <label class="text-gray-800 text-3xl block mb-2">Password</label>
              <div class="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  value={password}
                  required
                  class="w-full text-2xl border-b border-gray-300 focus:border-gray-800 pl-2 pr-4 py-3 outline-none"
                  placeholder="Enter password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute left-2 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="mt-12">
              <button
                type="submit"
                class="w-full py-3 px-6 text-lg font-semibold tracking-wider  rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div class="max-md:order-1 p-4">
          <img
            src="https://readymadeui.com/signin-image.webp"
            class="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
