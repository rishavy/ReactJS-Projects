import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { LOGO_URl } from "../../utils/constant";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const getLinkClass = (path) => (
    activeLink === path ? "text-[#2762D4]" : "text-[#838383] hover:text-[#2762D4]"
  );

  return (
    <div className="pb-20">
      <div className="w-full fixed flex justify-around items-center bg-[#fffffff1] text-[#636363] font-bolder p-3">
        <div className="flex justify-center items-center gap-3">
          <img src={LOGO_URl} alt="Logo" />
          <Link to="/" className="text-2xl font-bold cursor-pointer">GeekFoods</Link>
        </div>
        <ul className="flex gap-8 text-xl items-center cursor-pointer">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/quotes" className={getLinkClass("/quotes")}>
            Quotes
          </Link>
          <Link to="/restaurants" className={getLinkClass("/restaurants")}>
            Restaurants
          </Link>
          <Link to="/foods" className={getLinkClass("/foods")}>
            Foods
          </Link>
          <Link to="/contacts" className={getLinkClass("/contacts")}>
            Contact
          </Link>
        </ul>
        <button className="bg-[#2563EB] p-3 text-[#fff] font-bold rounded-lg hover:bg-[#4c79da]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
