import apple from "../../asset/apple.jpg"
import goggle from "../../asset/goggle.jpg"

const Footer = () => {
  return (
    <div className="w-full py-[20px] flex items-center justify-center bg-[#f5f5f5] text-[#0000007d]">
          <div className="w-[90%] flex flex-col">
            {/* up */}
            <div className="flex justify-between my-[40px]">
                <div>
                    <div className="text-[20px] text-[orange] font-[600]">TEAM DEVS</div>
                    <span>Substack is the home for<br/> great writing</span>       
                </div>
                {/* Row 1 */}
                <div className="flex flex-col gap-[7px]">
                <span className="text-[black]">Read</span>       
                <span className="hover: cursor-pointer">Discover</span>             
                <span className="hover: cursor-pointer">Get the app</span>             
                <span className="hover: cursor-pointer">Featured</span>             
                <span className="hover: cursor-pointer">Stack Reader</span>             
                <span className="hover: cursor-pointer">Top in culture</span>             
                <span className="hover: cursor-pointer">Top podcasts</span>             
                <span className="hover: cursor-pointer">Top in food & drink</span>             
                <span className="hover: cursor-pointer">Top in finance</span>             
                <span className="hover: cursor-pointer">Top in sports</span>             
                <span className="hover: cursor-pointer">Top in politics</span>             
                <span className="hover: cursor-pointer">Top in technology</span>             
                <span className="hover: cursor-pointer">Top in faith</span>             
                <span className="hover: cursor-pointer">Top in business</span>             
                <span className="hover: cursor-pointer">Sitemap</span>             
                </div>
                {/* Row 2 */}
                <div className="flex flex-col gap-[7px]">
                <span className="text-[black]">Writers</span>       
                <span className="hover: cursor-pointer">Switch to Substack</span>             
                <span className="hover: cursor-pointer">Switch from Ghost</span>             
                <span className="hover: cursor-pointer">Get started</span>             
                <span className="hover: cursor-pointer">Go paid</span>             
                <span className="hover: cursor-pointer">For podcasts</span>             
                <span className="hover: cursor-pointer">For bloggers</span>             
                <span className="hover: cursor-pointer">For finance writers</span>             
                <span className="hover: cursor-pointer">For authors</span>             
                <span className="hover: cursor-pointer">For comic creators</span>             
                <span className="hover: cursor-pointer">For food writers</span>             
                <span className="hover: cursor-pointer">For local news</span>          
                </div>
                {/* Row 3 */}
                <div className="flex flex-col gap-[7px]">
                <span className="text-[black]">Company</span>       
                <span className="hover: cursor-pointer">About</span>             
                <span className="hover: cursor-pointer">Help</span>             
                <span className="hover: cursor-pointer">Jobs</span>             
                <span className="hover: cursor-pointer">Blog</span>             
                <span className="hover: cursor-pointer">Vulnerability Policy</span>             
                <span className="hover: cursor-pointer">Contact</span>                     
                </div>
                {/* Row 4 */}
                <div className="flex flex-col gap-[7px]">
                <span className="text-[black]">Resources</span>       
                <span className="hover: cursor-pointer">Resource center</span>             
                <span className="hover: cursor-pointer">Guide to going paid</span>             
                <span className="hover: cursor-pointer">Help center</span>             
                <span className="hover: cursor-pointer">Community and programs</span>             
                <span className="hover: cursor-pointer">Brand assets</span>                  
                </div>
            </div>
            {/* down */}
            <div className="flex justify-between mt-[30px]">
                <div className="flex gap-[10px]">
                    <img className="rounded-[10px] border-[1px] border-[#c0c0c0b5] w-[28%] object-cover" src={apple}/>
                    <img className="rounded-[10px] border-[1px] object-cover border-[#c0c0c0b5] w-[28%]" src={goggle}/>
                </div>
                <div className="flex gap-[10px] text-[14px] items-end">
                    <span className="hover: cursor-pointer">@ Stack Inc</span>
                    <span className="hover: cursor-pointer">Privacy</span>
                    <span className="hover: cursor-pointer">Terms</span>
                    <span className="hover: cursor-pointer">Collection notice</span>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Footer