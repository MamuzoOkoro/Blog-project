import { Link } from "react-router-dom"

const LandingPageCom6 = () => {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center bg-[white]">
          <div className="w-[90%] flex items-center justify-center text-center flex-col">
          <div className="text-[30px] w-[70%] font-poppins text-[#000000b2] my-[30px]">
          “I can still remember standing in the kitchen in March 2020 and watching the first $1.00 I made come through, from sharing my own research. A year later and it’s now my full-time ‘job’.”
          </div>
          <Link to="">
          <div className=" py-[10px] px-[15px] text-[16px] flex text-[white] my-[20px] rounded hover:cursor-pointer hover:scale-[1.01] transition-all duration-[700] bg-[orange]">Create your stack
            </div>
          </Link>
          </div>
      </div>
    )
  }
  
  export default LandingPageCom6