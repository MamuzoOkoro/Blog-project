import { Link } from "react-router-dom"

const LandingPageCom8 = () => {
    return (
      <div className="w-full h-[70vh] flex items-center justify-center bg-[white]">
          <div className="w-[90%] flex items-center justify-center text-center flex-col">
          <div className="text-[50px] font-poppins text-[#000000b2] my-[20px]">
          Get started in minutes
          </div>
          <Link to="">
          <div className=" py-[10px] px-[15px] text-[16px] flex text-[white] my-[20px] rounded hover:cursor-pointer hover:scale-[1.01] transition-all duration-[700] bg-[orange]">Create your stack
            </div>
          </Link>
          </div>
      </div>
    )
  }
  
  export default LandingPageCom8