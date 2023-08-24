import { BiSearch } from "react-icons/bi"


const AdminHeader = () => {
  return (
    <div className='w-[100%] h-[70px] flex items-center justify-center'>
        <div className="w-[90%] h-[100%] flex items-center justify-between border-b-[1px] border-[silver] ">
            <div>Logo</div>
            {/* Holder */}
            <div className="flex gap-[10px]">
                {/* inputHolder */}
        <div className="flex items-center
         h-[40px] border-[1px] bg-[#eeeeee] px-[5px] rounded-[20px] gap-[5px]">
            {/* icon */}
            <div className="text-[20px] text-[#0000009a]"><BiSearch/></div>
            {/* input */}
            <input placeholder="Search"  className="w-[180px] h-[90%] rounded bg-transparent placeholder:text-[#0000009a] text-[14px] outline-none border-none"/>
        </div>
        {/* inputHolder */}
                <button className="py-[8px] px-[20px] hover:cursor-pointer hover:scale-[1.01] transition-all duration-[700] rounded-[20px] bg-[#eeeeee] hover:border-none hover:bg-[#716f6f7e] text-[#000000a3] font-[500]">Sign in</button>
                <button className="py-[8px] px-[20px] hover:scale-[1.01]  hover:cursor-pointer transition-all duration-[700] rounded-[20px] bg-[orange] hover:bg-[darkorange] hover:border-none text-white font-[500]">Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default AdminHeader