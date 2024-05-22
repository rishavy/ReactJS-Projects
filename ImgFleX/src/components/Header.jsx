import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleLinks = (url) => {
        navigate(url);
    }
    return (
        <div>
            <ul className="flex gap-4  p-4 align-center bg-[#48CAE4] z-50 top-0">
                <li onClick={() => handleLinks("/app")} className="font-bold text-xl cursor-pointer hover:scale-105"><a href="/">ImgFleX</a></li>
                <li onClick={() => handleLinks("/app/convert")} className="font-thin text-xl cursor-pointer hover:text-[#fff]">Convert</li>
                <li onClick={() => handleLinks("/app/search")} className="font-thin text-xl cursor-pointer hover:text-[#fff]">Download</li>
                <li onClick={() => handleLinks("/app/remove")} className="font-thin text-xl cursor-pointer hover:text-[#fff]">Remove Bg</li>
            </ul>
        </div>
    )
}

export default Header;
