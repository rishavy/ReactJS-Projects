import { useContext } from "react";
import { AuthContext } from "../main";

const Settings = () => {
  const { setAuth } = useContext(AuthContext);

  const resetDetails = () => {
    localStorage.setItem("active", false)
    setAuth(false);
  };
  return (
    <div className="bg-[#121420] pt-[65px] p-8 text-white h-[100vh]">
      <div>
        <h1 className="text-2xl">Restore Factory Settings</h1>
        <button
          className="border-2 border-[#48CAE4] w-[33%] mt-10 rounded-[50px] h-[44px] hover:text-black hover:bg-white transition duration-300 ease-in-out fonr-bold"
          onClick={resetDetails}
        >
          Restore Settings
        </button>
        <p className="mt-6">
          Restoring factory settings removes all the data stored on this device.
          You would be taken to the home screen!
        </p>
      </div>
    </div>
  );
};

export default Settings;