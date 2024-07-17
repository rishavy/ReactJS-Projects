import { LOGO_URl } from "../../utils/constant";

const Header = () => {
  return (
    <div className="pb-20">
      <div className=" w-full fixed flex justify-around items-center bg-[#ffffff] text-[#222222] p-3 border border-sold">
        <div className="flex justify-center items-center gap-3">
          <img src={LOGO_URl} alt="" className="" />
          <a className="text-2xl font-bold cursor-pointer">GeekFoods</a>
        </div>

        <ul className="flex gap-8 font-medium items-center cursor-pointer">
          <li className="hover:text-[#2762D4]">Home</li>
          <li className="hover:text-[#2762D4]">Quotes</li>
          <li className="hover:text-[#2762D4] text-[#2762D4] ">Restaurants</li>
          <li className="hover:text-[#2762D4]">Foods</li>
          <li className="hover:text-[#2762D4]">Contact</li>
        </ul>

        <button className="bg-[#2563EB] p-2 px-8 text-[#fff] rounded-lg hover:bg-[#4c79da]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;