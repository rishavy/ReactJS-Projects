import { MdOutlineWorkOutline } from "react-icons/md";


const Work = () => {
    return (
        <div className="w-[50%] m-auto flex pt-5 bg-white border-l-2 border-r-2">
        <div>
    <MdOutlineWorkOutline className="text-[#46bbff] text-[5.5rem] mt-5 ml-5"/>
    <h1 className="font-extrabold text-center  text-xl mt-1 ml-4">Work</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex gap-10 font-bold px-6">
            <h1>Present</h1>
            <p>Geekster - Full Stack developer trainee
            </p>
            </div>
            
            <div className="flex gap-10 font-bold px-6">
            <h1>Present</h1>
            <p>Geekster - Full Stack developer trainee
            </p>
            </div>
            
            <div className="flex gap-10 font-bold px-6">
            <h1>Present</h1>
            <p>Geekster - Full Stack developer trainee
            </p>
            </div>
        </div>
    </div>
    )
}

export default Work