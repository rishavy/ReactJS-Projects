import { useState } from "react";
import Image from "react-image-webp";
import imageCompression from "browser-image-compression";

const convert = () => {
  const [file, setFile] = useState(null);
  const [webpFile, setWebpFile] = useState(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      const webpImage = await convertToWebP(selectedFile);
      setWebpFile(URL.createObjectURL(webpImage));
    }
  };

  const convertToWebP = async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
      fileType: "image/webp",
    };
    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.error("Error converting to WebP:", error);
    }
  };

  return (
    <div className="pt-12 text-white">
      <div className=" flex flex-col items-center justify-center mb-10 bg-[#121420] min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold pt-10">
            Image Converter
          </h1>
          <h1 className="font-medium text-[#979797] pt-5 ">
            Convert your image files to WebP format
          </h1>
        </div>
        <div className="bg-[#48CAE4] w-[400px] p-2 rounded-3xl m-auto hover:bg-[#eee] hover:text-black">
          <label
            className="text-center ml-36 font-medium cursor-pointer"
          >
            <input type="file" hidden onChange={handleFileChange} />
            Choose Image
          </label>
        </div>
        <div className="mt-5 text-center">
          {file && (
            <>
              <h2 className="text-2xl font-semibold py-3">Original Image</h2>
              <img src={file} alt="Original" className="w-[400px]" />
            </>
          )}
          {webpFile && (
            <>
              <h2 className="text-2xl font-semibold py-10">Converted to WebP</h2>
              <Image
                src={webpFile}
                webp={webpFile}
                alt="WebP"
                className="w-[400px]"
              />
            </>
          )}
        </div>
        <div className="py-10 "></div>
      </div>
    </div>
  );
};
export default convert;
