import { IoBulbOutline } from "react-icons/io5";
import { TbSpeakerphone } from "react-icons/tb";
import { CgScreenWide } from "react-icons/cg";
function Icon() {
  return (
    <div className="w-[50%] m-auto flex gap-10 pt-10 bg-white border-l-2  border-r-2 pb-10">
        <IoBulbOutline className="text-[#46bbff] text-[5.5rem] ml-5"/>
        <TbSpeakerphone className="text-[#46bbff] text-[5.5rem] ml-5"/>
        <CgScreenWide className="text-[#46bbff] text-[5.5rem] ml-5"/>
        <CgScreenWide className="text-[#46bbff] text-[5.5rem] ml-5"/>
        <IoBulbOutline className="text-[#46bbff] text-[5.5rem] ml-5"/>
    </div>
  )
}

export default Icon