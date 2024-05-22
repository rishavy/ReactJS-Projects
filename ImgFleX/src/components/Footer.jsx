import { NavLink, useLocation } from "react-router-dom";
import { SiConvertio } from "react-icons/si";
import { ImBoxRemove } from "react-icons/im";
import { CiSearch, CiSettings } from "react-icons/ci";
import { GiLifeSupport } from "react-icons/gi";

const ptag = "w-[10px] m-auto text-xl";
const footerCss = "text-center w-1/5";

const Footer = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="fixed flex justify-evenly p-2 w-full bottom-0 bg-[#121420] z-20">
      <NavLink
        to="/app/convert"
        className={
          currentRoute === "/app/convert" ? `${footerCss} text-[#48CAE4]` : `${footerCss} text-white`
        }
      >
        <div className="hover:text-[#4de1ff] p-2 rounded-md">
          <p className={ptag}>
            <SiConvertio />
          </p>
          <p>&nbsp; Convert</p>
        </div>
      </NavLink>

      <NavLink
        to="/app/remove"
        className={
          currentRoute === "/app/remove" ? `${footerCss} text-[#48CAE4]` : `${footerCss} text-white`
        }
      >
        <div className="hover:text-[#4de1ff] p-2 rounded-md">
          <p className={ptag}>
            <ImBoxRemove />
          </p>
          <p>&nbsp; Remove</p>
        </div>
      </NavLink>

      <NavLink
        to="/app/search"
        className={
          currentRoute === "/app/search" ? `${footerCss} text-[#48CAE4]` : `${footerCss} text-white`
        }
      >
        <div className="hover:text-[#4de1ff] p-2 rounded-md">
          <p className={ptag}>
            <CiSearch />
          </p>
          <p>&nbsp; &nbsp; Search</p>
        </div>
      </NavLink>

      <NavLink
        to="/app/settings"
        className={
          currentRoute === "/app/settings" ? `${footerCss} text-[#48CAE4]` : `${footerCss} text-white`
        }
      >
        <div className="hover:text-[#4de1ff] p-2 rounded-md">
          <p className={ptag}>
            <CiSettings />
          </p>
          <p>&nbsp; Settings</p>
        </div>
      </NavLink>

      <NavLink
        to="/app/support"
        className={
          currentRoute === "/app/support" ? `${footerCss} text-[#48CAE4]` : `${footerCss} text-white`
        }
      >
        <div className="hover:text-[#4de1ff] p-2 rounded-md">
          <p className={ptag}>
            <GiLifeSupport/>
          </p>
          <p>&nbsp; Support</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Footer;
