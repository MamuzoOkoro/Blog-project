import Props3 from "../../Component/reuse/Props3"
import pix2 from "../../asset/phoneV2.png"


const LandingPageCom5 = () => {
  return (
    <div className="w-full py-[50px] bg-[#eeeeee] flex items-center justify-center">
         <div className="w-[95%] flex flex-col items-center justify-center text-center">
        <div className="text-[46px] w-[60%] font-poppins text-[#000000b2] my-[10px]">
        A world-class reading and listening experience
          </div>
          {/* Hold */}
          <div className="flex justify-center">
          {/* righht */}
        <div className="w-[50%]  flex items-center justify-center">
          
        <img src={pix2} className="w-[90%]"/>
        </div>
        {/* left */}
        <div>
          
          <Props3 title="Post" text="
Substack’s simple system lets you publish to the web, email, and our app simultaneously so you can find new readers and always reach your existing audience."/>
          <Props3 title="Podcasts" text="
We make it easy to start a subscription podcast. Share episodes to Substack subscribers and to all the major podcast players with one click."/>
          <Props3 title="Video" text="
Upload or record videos directly into a Substack post. Make videos available to everyone or only paid subscribers."/>
          <Props3 title="Community" text="
On Substack, you’re not publishing into a void. Comments and community threads connect you and your subscribers directly."/>

</div>
</div>
          </div>
    </div>
  )
}

export default LandingPageCom5