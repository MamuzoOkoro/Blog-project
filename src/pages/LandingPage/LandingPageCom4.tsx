import Props2 from "../../Component/reuse/Props2"
import pix1 from "../../asset/benefit-1.png"
import pix2 from "../../asset/benefit-2.png"
import pix3 from "../../asset/benefit-3.png"

const LandingPageCom4 = () => {
  return (
    <div className="w-full flex items-center justify-center">
        <div className="w-[95%]  flex items-center flex-col justify-center">
            <Props2 Img={pix1} title="You wrote it, you own it." text="
You always own your intellectual property, mailing list, and subscriber payments. With full editorial control and no gatekeepers, you can do the work you most believe in."/>
            <Props2 Img={pix2} title="Grow your audience." text="
Marketing isn’t all on your shoulders. More than 40% of all new free subscriptions and around 20% of paid subscriptions to Substacks come from within our network."/>
            <Props2 Img={pix3} title="Let us handle everything else." text="
A Substack combines a blog, newsletter, payment system, and customer support team — all integrated seamlessly with a simple interface. We handle the admin, billing, and tech so you can focus on your best work."/>
        </div>
    </div>
  )
}

export default LandingPageCom4