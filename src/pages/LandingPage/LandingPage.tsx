
import Footer from "../../Component/static/Footer"
import LandingPageCom1 from "./LandingPageCom1"
import LandingPageCom2 from "./LandingPageCom2"
import LandingPageCom3 from "./LandingPageCom3"
import LandingPageCom4 from "./LandingPageCom4"
import LandingPageCom5 from "./LandingPageCom5"
import LandingPageCom6 from "./LandingPageCom6"
import LandingPageCom7 from "./LandingPageCom7"
import LandingPageCom8 from "./LandingPageCom8"
import LandingPageHeader from "./LandingPageHeader"
import LandingPageHero from "./LandingPageHero"
const LandingPage = () => {
  return (
    <div className=" h-screen">
        <LandingPageHeader/>
        <LandingPageHero/>
        <LandingPageCom1/>
        <LandingPageCom2/>
        <LandingPageCom3/>
        <LandingPageCom4/>
        <LandingPageCom5/>
        <LandingPageCom6/>
        <LandingPageCom7/>
        <LandingPageCom8/>
        <Footer/>
    </div>
  )
}

export default LandingPage