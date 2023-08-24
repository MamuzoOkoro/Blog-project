import React from "react";

export interface iCard{
    num: string,
    Img: any;
    Blogname : string,
    name : string,
    text : string,
    title : string,
}

const Props1:React.FC<iCard> = ({num,Img,Blogname,name,text,title}) => {
  return (
    <div className="w-[100%] flex font-poppins my-[15px]">
        {/* main */}
        <div className="w-[100%] flex items-center">
            {/* right */}
            <div className="w-[50%] flex items-center gap-[20px]">
                {/* num */}
                <div className="w-[70px] h-[70px] text-[#d8d4d4] flex items-center justify-center text-[40px]">{num}</div>
                <img  className="w-[70px] h-[70px] bg-[#c0c0c08a] flex items-center justify-center rounded" src={Img}/>
                <div className="flex flex-col">
                    {/*Blog name */}
                    <span className="text-[24px] font-[500]">{Blogname}</span>
                    {/* name */}
                    <span>{name}</span>
                   
                </div>
            </div>
            {/* left */}
            <div className="w-[60%]">
                {/* text */}
                <div className="text-[14px]">{text}</div>
                {/* title */}
                <div className="text-[14px] font-[600] mt-[10px]">{title}</div>
            </div>
        </div>
        {/* main */}
    </div>
  )
}

export default Props1