
const CategoriesPage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-[#f5f5f5] text-[#0000007d]">
        <div className="w-[600px] h-[450px] px-[20px]  bg-[white] rounded border-[1px] border-[#d0cece70] flex-[wrap] flex items-center justify-center flex-col">
            <div className="w-[95%] flex flex-wrap my-[20px]">
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Culture</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Politics</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Technology</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Business</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Finance</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Podcast</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Food & Drink</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Sports</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">News</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Music</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Comics</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Crypto</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Faith & Spirituality</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">International</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Writer favorites</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">Art and Illustration</div>
                <div className="py-[6px] px-[15px] border-[1px] border-[#d0cece70] rounded m-[10px] hover:cursor-pointer">+</div>
            </div>
            <button className="w-[90%] py-[10px] hover:cursor-pointer bg-[orange]">Continue</button>
        </div>
    </div>
  )
}

export default CategoriesPage