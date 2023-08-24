import { AiOutlineRight} from "react-icons/ai"
import Props1 from "../../Component/reuse/Props1"
import AAAAA from "./AAAA";
import pix1 from "../../asset/dummy.jpg"

const LandingPageCom2 = () => {

  return (
    <div className="w-full flex my-[10px] items-center justify-center">
        {/* main */}
        <div className="w-[90%] flex flex-col items-center">
            {/* head */}
            <div className="w-[100%] h-[60px] flex items-center justify-between border-b-[1px] border-[#8d8484b2]">
                <AAAAA/>
         <div className="text-[15px] text-[black]">
            <AiOutlineRight/></div>
            </div>
            {/* head */}
            <Props1 num="1" Img={pix1} Blogname=" Emily's Blog" name=" Emily Ley" 
            text="Bestselling author and Simplified founder, Emily Ley, shares reflections on life, motherhood, entrepreneurship, and behind the scenes of creating planners and products for busy women, while marrying her own work and home life in meaningful ways." 
            title=" Thousands of paid subscribers · $8/month"/>
            <Props1 num="2" Img={pix1} Blogname=" Emily's Blog" name=" Emily Ley" 
            text="Bestselling author and Simplified founder, Emily Ley, shares reflections on life, motherhood, entrepreneurship, and behind the scenes of creating planners and products for busy women, while marrying her own work and home life in meaningful ways." 
            title=" Thousands of paid subscribers · $8/month"/>
            <Props1 num="3" Img={pix1} Blogname=" Emily's Blog" name=" Emily Ley" 
            text="Bestselling author and Simplified founder, Emily Ley, shares reflections on life, motherhood, entrepreneurship, and behind the scenes of creating planners and products for busy women, while marrying her own work and home life in meaningful ways." 
            title=" Thousands of paid subscribers · $8/month"/>
            <Props1 num="4" Img={pix1} Blogname=" Emily's Blog" name=" Emily Ley" 
            text="Bestselling author and Simplified founder, Emily Ley, shares reflections on life, motherhood, entrepreneurship, and behind the scenes of creating planners and products for busy women, while marrying her own work and home life in meaningful ways." 
            title=" Thousands of paid subscribers · $8/month"/>
            <Props1 num="5" Img={pix1} Blogname=" Emily's Blog" name=" Emily Ley" 
            text="Bestselling author and Simplified founder, Emily Ley, shares reflections on life, motherhood, entrepreneurship, and behind the scenes of creating planners and products for busy women, while marrying her own work and home life in meaningful ways." 
            title=" Thousands of paid subscribers · $8/month"/>
        </div>
        {/* main */}
    </div>
  )
}

export default LandingPageCom2