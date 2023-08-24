import pix from "../../asset/illu1.jpeg"

const LandingPageHero = () => {
  return (
    <div>
                    <div className="w-full h-[90vh] bg-[#006f5c] flex items-center justify-center">
                <div className="w-[95%] h-[100%] items-center justify-between flex">
                    {/* right */}
                    <div className="flex flex-col">
                        <div className="text-[50px] text-white w-[100%] leading-[1.3] font-[500] font-poppins">Do Your best work, supported by your subscribers</div>
                        <div className="text-[15px] w-[70%] text-white font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequatur itaque ducimus, reprehenderit sed repellat vitae sit repellendus ullam perferendis.</div>
                    </div>
                    {/* left */}
                    <img src={pix} className="w-[50%]  rounded-tl-[30px] rounded-br-[30px]"/>
                </div>
            </div>
    </div>
  )
}

export default LandingPageHero