import { AiOutlineArrowRight} from "react-icons/ai"
import { AiOutlineUp} from "react-icons/ai"
import { Link } from "react-router-dom";

export interface iCard{
    text : string,
    title : string,
}
const Props3:React.FC<iCard> = ({text,title}) => {
  return (
    <div className="">
        {/* right */}
        <div className="w-[500px] flex gap-[20px]  border-b-[1px] border-[#c0c0c085] py-[20px]">
       <div className="text-[30px] mt-[10px] text-[orange]">
            <AiOutlineUp/>
       </div>
           {/* holder */}
           <div className="text-start">
             {/* title */}
             <div className="text-[40px] text-[#000000b2]">{title}</div>
            {/* text */}
            <div className="text-[14px] mt-[10px] text-[#000000b2] break-words">{text}</div>
          <Link to="">
          <div className="text-[18px] flex text-[orange] items-center gap-[10px] mt-[10px] hover:cursor-pointer">Create your stack
              <div><AiOutlineArrowRight/></div>
            </div>
          </Link>
           </div>
        </div>
        {/* right */}
    </div>
  )
}

export default Props3