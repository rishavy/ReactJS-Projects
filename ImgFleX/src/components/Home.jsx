import curveIcon from "../assets/curveIcon.svg";
import { useContext } from "react";
import {AuthContext} from "../main.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const getStartedBtn = () => {
    setAuth(true)
    localStorage.setItem("active", true)
    navigate("/app", { replace: true });
  }
  return (
    <div className="flex justify-space-around items-center align-center bg-[#121420] h-[100vh]">
      <div className="w-[39%] h-[650px] flex justify-center items-center">
        <img
          className="object-contain h-[450px]"
          src="https://badass-app.vercel.app/static/media/hero-img-1.b04b7105fa7acb3dae33.png"
        />
      </div>
      <div className="w-[55%] text-white ">
        <div className="relative">
          <h1 className="text-[47px] p-6 font-bold">
            A Free <span className="text-[#48CAE4]">Tool</span> For Image Manipulation
          </h1>
          <img
            className="h-[30px] absolute bottom-2 left-12"
            src={curveIcon}
          />
        </div>

        <p className="p-4 text-2xl m-4">
          Do all with one application download, convert and remove background
          images.
        </p>

        <button onClick={getStartedBtn} className="border-2 border-[#48CAE4] w-[307px] m-10 rounded-[50px] h-[44px] hover:text-black hover:bg-white font-bold transition duration-300 ease-in-out">Get Started</button>
      </div>
    </div>
  );
};

export default Home;