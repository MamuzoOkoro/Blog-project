
export interface iCard{
    text : string,
    title : string,
}
const Props4:React.FC<iCard> = ({text,title}) => {
  return (
    <div className="w-full flex my-[40px]">
        {/* right */}
        <div className="w-[50%] flex justify-center">
            <div className="text-[30px] font-poppins w-[70%] text-start">{title}</div>
        </div>
        {/* left */}
        <div className="w-[50%]">
            <div className="text-[15px] w-[80%] text-start">  {text}</div>
    </div>
    </div>
  )
}

export default Props4