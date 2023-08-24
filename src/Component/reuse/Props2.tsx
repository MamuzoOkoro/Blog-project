import { AiOutlineArrowRight} from "react-icons/ai"
import { Link } from "react-router-dom";

export interface iCard{
    Img: any;
    text : string,
    title : string,
}
const Props2:React.FC<iCard> = ({Img,text,title}) => {
  return (
    <div className="w-[100%] flex font-poppins items-center gap-[20px] justify-between">
        {/* left */}
        <div className="w-[50%] flex items-center justify-center">
          
        <img src={Img} className="w-[80%]"/>
        </div>
        {/* left */}
        {/* right */}
        <div className="w-[50%]">
            {/* title */}
            <div className="text-[40px] text-[#000000b2]">{title}</div>
            {/* text */}
            <div className="text-[14px] w-[90%] mt-[10px] text-[#000000b2]">{text}</div>
          <Link to="">
          <div className="text-[18px] flex text-[orange] items-center gap-[10px] mt-[10px] hover:cursor-pointer">Create your stack
              <div><AiOutlineArrowRight/></div>
            </div>
          </Link>
        </div>
        {/* right */}
    </div>
  )
}

export default Props2