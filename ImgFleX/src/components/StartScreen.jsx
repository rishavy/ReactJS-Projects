import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const StartScreen = () => {
  const navigate = useNavigate();
  const handleLinks = (url) => {
    navigate(url);
  };

  return (
    <div className="bg-[#121420] text-white text-center">
      <div className="w-[35%] m-auto pt-28">
        <img
          className="bg-[#48CAE4] p-4 rounded-lg"
          src="https://badass-app.vercel.app/static/media/hero-img-2.aecae7980905c700e4ca.png"
        />
        <h1 className="text-3xl font-bold p-6">
          Remove Image <span className="text-[#48CAE4]">Background</span>
        </h1>
        <p className="p-6 text-[#6C757D]">
          Get a transparent background for any image
        </p>
        <button
          className="h-[50px] w-full font-bold rounded-[50px] bg-white text-black my-4 hover:bg-[#eee]"
          onClick={() => handleLinks("/app/remove")}
        >
          Upload Image
        </button>
        <p className="p-6 text-[#6C757D]">No image? try one of these</p>
        <div className="text-4xl  m-4 ">
          <span className="border-8 border-white m-2 rounded-lg">🦅</span>
          <span className="border-8 border-white m-2 rounded-lg">🦋</span>
          <span className="border-8 border-white m-2 rounded-lg">🦤</span>
          <span className="border-8 border-white m-2 rounded-lg">🌄</span>
        </div>

        <img src="https://badass-app.vercel.app/static/media/chain.e33754ea5500ca9abefd.png" />
        <p className="text-3xl font-bold p-4">
          <span className="text-[#48CAE4]">Convert</span> Your Images | Files
        </p>
        <p className="p-2 text-[#6C757D]">
          With Badass, you can convert your files to any format
        </p>

        <button
          className="h-[50px] w-full rounded-[50px] font-bold bg-[#48CAE4] text-[#fff] my-4 mb-10 hover:bg-[#4de1ff]"
          onClick={() => handleLinks("/app/convert")}
        >
          Choose Files
        </button>
        <p className="text-[220px]">⚡</p>

        <h1 className="text-3xl font-bold p-2">
          <span className="text-[#48CAE4]">Download</span> Multiple Images At
          Once
        </h1>
        <p className="p-2 text-[#6C757D]">
          Ever thought of downloading multiple images at once?
        </p>
        <button
          className="h-[50px] w-full rounded-[50px] font-bold bg-white text-black my-4 mb-28 hover:bg-[#eee]"
          onClick={() => handleLinks("/app/search")}
        >
          Download Images
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default StartScreen;