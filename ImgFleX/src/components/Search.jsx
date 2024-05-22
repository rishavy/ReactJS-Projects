import { useState } from "react";
import { Bulk_Api } from "../utils/Api";
import { GoDownload } from "react-icons/go";
import axios from "axios";

const Search = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(Bulk_Api + input);
      setData(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const searchImage = (e) => {
    {
      if (e.key === "Enter") {
        handleSearch();
      } else return;
    }
  };

  const handleDownload = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(blobUrl);
  };

  return (
    <div className="py-24 bg-[#121420] text-white min-h-screen">
      <h1 className="text-3xl font-bold p-4">Bulk Image Downloader</h1>
      <div className="w-1/2 m-auto">
        <input
          className="w-[100%] text-black m-4 p-2 rounded-[50px] outline-none text-center border-2 border-[#48CAE4] "
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search image eg bats,cars,gift"
          onKeyUp={searchImage}
        />
      </div>

      <div>
        {loading ? (
          <h1 className="text-3xl font-bold p-4 ml-[40%]">Loading...</h1>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 z-0">
            {data.map((item) => {
              return (
                <div key={item.id} className="rounded-lg relative z-10">
                  <img
                    className="w-[320px] h-[300px] m-4 rounded-lg object-cover z-10"
                    src={item.cover_photo.urls.regular}
                  />
                  <button
                    className="text-xl border border-black p-2 rounded-[50%] bg-black absolute bottom-2 right-2"
                    onClick={() =>
                      handleDownload(
                        item.cover_photo.urls.full,
                        `image-${item.cover_photo.id}.jpg`
                      )
                    }
                  >
                    <GoDownload />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
