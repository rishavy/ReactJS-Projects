import { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import Loader from "./Loader";
import toast, { Toaster } from "react-hot-toast";

const Remove = () => {
  const [inputImage, setInputImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const toastCall = (message) => {
    toast.success(message);
  };

  const removeBackground = async () => {
    if (!inputImage) return;

    setIsLoading(true);

    const formData = new FormData();
    formData.append("image_file", inputImage);
    formData.append("size", "auto");

    const api_key = "xmt8TmaDLwq5JiA8qe81CLi8";
    const url = "https://api.remove.bg/v1.0/removebg";

    try {
      const response = await axios({
        method: "post",
        url: url,
        data: formData,
        responseType: "arraybuffer",
        headers: {
          "X-Api-Key": api_key,
        },
        encoding: null,
      });

      if (response.status !== 200) {
        console.error("Error:", response.status, response.statusText);
      } else {
        const imgsrc = URL.createObjectURL(
          new Blob([response.data], { type: "image/png" })
        );
        setOutputImage(imgsrc);
        console.log(imgsrc);
      }
    } catch (error) {
      console.error("Request failed:", error);
    } finally {
      setIsLoading(false);
      toastCall("Background Removed");
    }
  };

  const downloadImage = async (url, description) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      saveAs(blob, description || "downloaded_image.jpg");
      toastCall("Downloaded Successfully");
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-[100%] h-[100vh] bg-[#121420]">
      <div>
        <Toaster />
      </div>
      <div className="absolute top-0 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold pt-5">Remove Background</h1>
        <p className="text-xl my-4 text-gray-500">
          Remove the background of any image
        </p>
      </div>

      <div className="flex justify-center items-center absolute top-32">
        <div className="bg-[#fff] w-[200px] p-2 rounded-3xl mr-10 cursor-pointer hover:bg-[#e7e7e7]">
          <label className="text-center ml-12 font-medium">
            <input
              type="file"
              hidden
              multiple
              onChange={(e) => {
                setInputImage(e.target.files[0]);
                toastCall("Image Uploaded");
              }}
            />
            Choose Files
          </label>
        </div>
        <button
          className="bg-[#48CAE4] w-[200px] p-2 rounded-3xl font-semibold hover:bg-[#4de1ff]"
          onClick={removeBackground}
        >
          Remove Background
        </button>
      </div>

      <div className="absolute top-48">
        {isLoading ? (
          <div className="flex justify-center items-center mt-[250px]">
            <Loader />
          </div>
        ) : outputImage ? (
          <div className="flex flex-col justify-center items-center pt-8">
            <img
              src={outputImage}
              alt="output image"
              className="h-[320px] w-[400px] m-auto shadow-xl shadow-gray-500/40 bg-transparent border-2"
            />
            <button
              className="removeBgButton mt-8 bg-[#fff] w-[200px] p-2 font-semibold rounded-3xl hover:bg-[#e7e7e7]"
              onClick={() => downloadImage(outputImage)}
            >
              Download
            </button>
          </div>
        ) : null}
      </div>
      <div className="absolute bottom-0"></div>
    </div>
  );
};

export default Remove;