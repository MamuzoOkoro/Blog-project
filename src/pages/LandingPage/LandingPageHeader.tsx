import {BiSearch} from "react-icons/bi"
import { Link } from "react-router-dom"

const LandingPageHeader = () => {
  return (
    <div> <div className="w-[full] h-[60px] bg-[#006f5c] flex items-center justify-center border-b-[1px] border-[white]">
    {/* main */}
    <div className="w-[95%] h-[100%]  flex items-center justify-between">

    {/* right */}
    <div>
    <div className="text-[30px] text-[white] font-caternia font-[700]">Team Devs</div>
    </div>
    {/* right */}
    {/* left */}
    <div className="flex items-center gap-[5px]">
        {/* inputHolder */}
        <div className="flex items-center jc
         h-[40px] border-[1px] border-[white] px-[3px] rounded gap-[5px]">
            {/* icon */}
            <div className="text-[20px] text-white"><BiSearch/></div>
            {/* input */}
            <input placeholder="Search"  className="w-[180px] h-[90%] rounded bg-transparent placeholder:text-white text-[14px] outline-none border-none"/>
        </div>
        {/* inputHolder */}
        {/* Button */}
       <Link to="opinionPage">
       <div className="py-[7px] px-[15px] bg-[#f8b73f] rounded text-[white] hover:cursor-pointer hover:scale-[1.01] transition-all duration-[700]">
            Get Started
        </div>  
       </Link>
        {/* Button */}
    </div>
    {/* left */}
</div>
                
</div></div>
  )
}

export default LandingPageHeader